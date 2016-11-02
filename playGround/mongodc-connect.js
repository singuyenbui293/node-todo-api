// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')
var user = {name: 'Nguyen Bui', age: 25}

var {name} = user

print(name)

function print(a) {
  return console.log(a)
}

// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
//   if (err) {
//     return console.log('unable to connect to mongoDB server')
//
//   }
//   console.log('Connected to MongoDB server')
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (error, result) => {
//     if (error){
//       return print('unable to insert todo', error)
//     }
//     print(JSON.stringify(result.ops, undefined, 2))
//   })
//   db.close()
// })

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return print("unable to connect to sever")
  }
  print('Connected to server')
  db.collection('Users').insertOne({
    name: 'nguyen bui',
    age: 23,
    location: 'ho chi minh vietnam'

  }, (err, result) => {
    if (err) {
      return print('unable to insert user', err)
    }
    print(result.ops[0]._id.getTimestamp())
  })
  db.close()
})
