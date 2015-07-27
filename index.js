/**
 * Created by Yury on 28/06/15.
 */
var Promise = require('bluebird'),
    MongoDB = require('mongodb'),
    cluster = require('cluster'),
    numCPUs = require('os').cpus().length;

var COLLECTION_NAME = 'a_test';
var CONNECTION_STRING = 'mongodb://127.0.0.1:27017/sf';
var CHUNK_SIZE = 1000;
var QUERIES_COUNT = CHUNK_SIZE * 10;
var DEACTIVE_INTERVAL = 1 * 1000; // miliseconds

Promise.promisifyAll(MongoDB);
Promise.promisifyAll(MongoDB.Cursor.prototype);

function upsertRecord(db, n) {
  var pArray = [];

  while (n--) {
    var sid = Math.round(Math.random() * 20),
        query = {sid: sid, status: 'active'},
        update = {
          "$inc": {
            "hits": 1
          }
        };

    pArray.push(db.collection(COLLECTION_NAME).updateAsync(query, update, { upsert: true })
        .then(function (res) {
          return true;
        }, function (err) {
          console.log("Error on upsert:", query, update, err);
          return true; // I just log it
        })
      );
  }

  return Promise.all(pArray);
}

function deactivateRecord(db) {
  var sid = Math.round(Math.random() * 20),
      query = {sid: sid, status: 'active'},
      update = {
        "$set": {
          "status": "endend on " + (new Date()).getTime()
        }
      };

  db.collection(COLLECTION_NAME).updateAsync(query, update);
}

function upsertAll(db, n) {
  return upsertRecord(db, CHUNK_SIZE).then(function() {
    if (n > 0) {
      return upsertAll(db, n-CHUNK_SIZE);
    }

    return true;
  });
}


function setupCollection() {
  console.log('Setting up collection ' + COLLECTION_NAME + ' on ' + CONNECTION_STRING);
  var dbP = MongoDB.MongoClient.connectAsync(CONNECTION_STRING);
  return dbP.then(function (db) {
    return db.collection(COLLECTION_NAME).ensureIndexAsync({'sid': 1, 'status': 1}, { 'unique': true, sparse: true });
  });
}


function runTest() {
  var dbP = MongoDB.MongoClient.connectAsync(CONNECTION_STRING);

  console.log('Running test');


  return dbP.then(function (db) {

    setInterval(function () {
      deactivateRecord(db);
    }, DEACTIVE_INTERVAL);

    return db;
  }).then(function (db) {
    return upsertAll(db, QUERIES_COUNT);
  });

}

var workersActive = 0;
if (cluster.isMaster) {
  setupCollection().then(function () {
    for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
      workersActive++;
    }

    cluster.on('exit', function(worker, code, signal) {
      console.log('worker ' + worker.process.pid + ' exited');

      workersActive--;
      if (workersActive === 0) {
        console.log('Bye Bye.');
        process.exit();
      }

    });
  });
} else {
  runTest().then(function () {
    console.log('Test done on pid ' + process.pid);
    process.exit();
  });
}
