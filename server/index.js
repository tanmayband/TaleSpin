import './config.js';

import express from "express";
const app = express();

import cors from "cors";
import { recordRoutes } from "./routes/record.js";

// get driver connection
import * as DBConn from "./db/conn.js";

import * as Utils from "./utils.js";

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use(recordRoutes);
 
app.listen(port, () => {
  // perform a database connection when server starts
  DBConn.connectToServer(function (err) {
    if (err) console.error(err);
    
    let logStr = "";
    DBConn.getDb().collections(function (err, resp) {
        resp.forEach(collxn => {
            logStr += `\n${collxn.collectionName}`;
        })

        Utils.printLog(`Available collections:${logStr}`);
    })

  });
  Utils.printLog(`Server is running on port: ${port}`);
});