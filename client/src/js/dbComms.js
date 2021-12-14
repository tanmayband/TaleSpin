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