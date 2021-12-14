import axios from "axios";
import * as Utils from './utils';

export function getTimeline(timelineId, callback)
{
    axios
		.get(`http://localhost:3001/timeline/${timelineId}`)
		.then(resp => {
            callback(resp);
		})
		.catch(error => {
			Utils.printLog(error);
		});
}

export function toggleAttribute(indices, hide, callback)
{
    console.log(indices);
    let timelineId = indices[0];
    indices.splice(0,1);
    axios
        .post(`http://localhost:3001/toggle`, {
            timelineId: timelineId,
            indices: indices,
            hide: hide
        })
        .then(resp => {
            callback(resp);
		})
		.catch(error => {
			Utils.printLog(error);
		});;
}