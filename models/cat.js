//This file deals with the db functionalities:
//Double dot is used to indicate that js file for dbConnection is one directory up as cats.js file comes under folder'models'
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
  