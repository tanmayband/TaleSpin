import './config.js';

import express from "express";
const app = express();

import middlewareWrapper from "cors";
// const { middlewareWrapper } = pkgCors;

// get driver connection
import * as DBConn from "./db/conn.js";

import * as Utils from "./utils.js";

const port = process.env.PORT || 5000;
app.use(middlewareWrapper());
app.use(express.json);
 
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