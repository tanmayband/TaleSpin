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
            // Utils.printLog(`Request processed for ${req.params.timelineId}`);
            // Utils.printLog(result);
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

recordRoutes.route('/toggle').post(function(req, res) {
    console.log("in toggle");
    let timelineId = req.body.timelineId;
    let attrIndices = req.body.indices;
    let hide = req.body.hide;

    let setString = "timeline";
    attrIndices.forEach((idx, i) => {
        setString += `.${idx}`;
        if(i < attrIndices.length - 1)
            setString += `.${INDEX_LEVELS[i]}`;
    });
    setString += ".hidden";
    console.log(setString);

    let setObj = {};
    setObj[setString] = hide;

    DBConn.getDb()
        .collection("timeline")
        .updateOne(
            {"timelineId": timelineId},
            {"$set": setObj},
            function(err, result)
            {
                if(err) throw err;
                // Utils.printLog(result);
                res.json(result);
            }
        )
});

const INDEX_LEVELS = ["characters", "attributes"];