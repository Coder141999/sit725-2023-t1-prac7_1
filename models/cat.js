const { ObjectId } = require('mongodb');
let db = require('../dbConnection');

function getAllCats(callback){
  let collection = db.getCollection();
  collection.find({}).toArray(callback);
  }
function catPost(cat, callback){
  let collection = db.getCollection();
  collection.insertOne(cat, callback);
}
function catDel(id, callback){
  let collection = db.getCollection();
  const id1 = new ObjectId(id)
  collection.deleteOne({_id: id1}, callback);
}
module.exports = {catPost,getAllCats, catDel}
  