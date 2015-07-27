# Mongodb 3.0.4 upsert test, fails with wiredtiger
This test basicly adds some documents that has random sid 1..100,
and then updates the hit counter on them. Sometime, a time changes status field from 'active' to 
something else.

That program runs successfully on mongodb 3.0.4 with mmapv1 engine, but throws E11000 errors on wiredtiger.

## Install and run:
install:
```
git clone https://github.com/yurynix/mongodb-upsert-test.git
cd mongodb-upsert-test
npm install
```
before running, edit index.js and modify your CONNECTION_STRING.

then run:
```
node index.js
```



## Expected result:
```
Setting up collection a_test on mongodb://.../sf?authMechanism=SCRAM-SHA-1
Running test
Running test
Running test
Running test
Running test
Running test
Running test
Running test
Test done on pid 10196
worker 10196 exited
Test done on pid 2084
worker 2084 exited
Test done on pid 12176
worker 12176 exited
Test done on pid 4748
worker 4748 exited
Test done on pid 7000
Test done on pid 8648
worker 7000 exited
worker 8648 exited
Test done on pid 8304
worker 8304 exited
Test done on pid 6764
worker 6764 exited
Bye Bye.
```

## Actual result:
```
Setting up collection a_test on mongodb://.../sf?authMechanism=SCRAM-SHA-1
Running test
Running test
Running test
Running test
Running test
Running test
Running test
Running test
Error on upsert: { sid: 19, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 12, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 12, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 12, : "active" }' }
Error on upsert: { sid: 3, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 12, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 12, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 12, : "active" }' }
Error on upsert: { sid: 19, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 18, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 18, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 18, : "active" }' }
Error on upsert: { sid: 11, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 9, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 9, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 9, : "active" }' }
Error on upsert: { sid: 7, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 12, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 12, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 12, : "active" }' }
Error on upsert: { sid: 11, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 19, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 19, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 19, : "active" }' }
Error on upsert: { sid: 11, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 7, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 7, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 7, : "active" }' }
Error on upsert: { sid: 12, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 8, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 8, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 8, : "active" }' }
Error on upsert: { sid: 19, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 17, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 17, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 17, : "active" }' }
Error on upsert: { sid: 20, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 18, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 18, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 18, : "active" }' }
Error on upsert: { sid: 3, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 14, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 14, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 14, : "active" }' }
Error on upsert: { sid: 6, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 1, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 1, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 1, : "active" }' }
Test done on pid 704
worker 704 exited
Test done on pid 5096
worker 5096 exited
Test done on pid 11356
worker 11356 exited
Test done on pid 6868
worker 6868 exited
Error on upsert: { sid: 9, status: 'active' } { '$inc': { hits: 1 } } { [MongoError: E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 3, : "active" }]
  name: 'MongoError',
  message: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 3, : "active" }',
  index: 0,
  code: 11000,
  errmsg: 'E11000 duplicate key error collection: sf.a_test index: sid_1_status_1 dup key: { : 3, : "active" }' }
Test done on pid 10936
Test done on pid 5912
worker 10936 exited
worker 5912 exited
Test done on pid 792
Test done on pid 12244
worker 12244 exited
worker 792 exited
Bye Bye.

```