const MongoClient = require('mongodb').MongoClient;
require("dotenv").config()

const uri = "mongodb+srv://mailer-project:"+process.env.MONGO_PASSWORD+"@auth.iq95u.mongodb.net/mailer?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = client;