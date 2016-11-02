

const {MongoClient, ObjectID} = require('mongodb')
var user = {name: 'Nguyen Bui', age: 25}

var {name} = user

print(name)

function print(a) {
  return console.log(a)
}


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({completed: true}).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find({completed: false }).toArray().then((docs) => {
    print(JSON.stringify(docs))
  }, (err) => {
    print(err)
  })

  // db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // });

  // db.close();
});
