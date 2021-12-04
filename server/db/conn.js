import { MongoClient, Db } from "mongodb";
import * as Utils from "../utils.js";

const myDB = process.env.MONGO_URI;
Utils.printLog(myDB);

const client = new MongoClient(myDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db = new Db(client, "temp");
 
export function connectToServer(callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("eatmynote");
        Utils.printLog("Successfully connected to MongoDB."); 
      }
      return callback(err);
    });
  }
 
export function getDb() {
    return _db;
}