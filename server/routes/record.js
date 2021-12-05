import express from "express";
import * as DBConn from "../db/conn.js";
import * as Utils from "../utils.js";

export const recordRoutes = express.Router();

recordRoutes.route('/timeline/:timelineId').get(function(req, res)
{
    Utils.printLog(`Request received for ${req.params.timelineId}`);
    let timelineQuery = { timelineId: req.params.timelineId };
    DBConn.getDb()
        .collection("timeline")
        .findOne(timelineQuery, function(err, result)
        {
            if(err) throw err;
            Utils.printLog(`Request processed for ${req.params.timelineId}`);
            Utils.printLog(result);
            res.json(result);
        });
});

recordRoutes.route('/timeline/').get(function(req, res)
{
    Utils.printLog(`Request received`);
});

recordRoutes.route('/').get(function(req, res)
{
    Utils.printLog(`Base request received`);
    res.json("Hello");
});