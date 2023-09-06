const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://coder12345:mongodb12345@cluster0.faktrzo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  let collection;

  async function connect() {
    return new Promise(async (resolve, reject) => {
    try {
      await client.connect();
      collection= client.db().collection('Cat');
      console.log('connected to collection');
      resolve(); //when successful
    } 
    catch(ex) {
      console.error(ex);
      reject(ex); //when error
    }
   });
  }

function getCollection() {
    return collection;
}

//for exporting the client so that it can be used in some other part of this application
module.exports = {connect, getCollection};