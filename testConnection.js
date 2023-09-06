const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://coder12345:mongodb12345@cluster0.faktrzo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

client.connect(err => {
    if (err) {
        console.error('Database connection failed', err);
        return;
    }
    console.log('Connected to database');
    const collection = client.db("test").collection("devices");
    client.close();
});
