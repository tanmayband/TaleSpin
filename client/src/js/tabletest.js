import React from "react";
import { Container, Row } from "react-bootstrap";

import '../css/tabletest.css'
import EventColumn from "./eventColumn";
import * as Utils from './utils';
import { getTimeline } from './dbComms';

class Tabletest extends React.Component
{
	constructor(props) {
		super(props);

		this.state = {
			timelineData: []
		}
	}

	componentDidMount()
	{
		getTimeline(this.props.timeline, resp => {
			this.setState({timelineData: resp.data.timeline});
		});
	}

	render()
	{
		let data = this.state.timelineData.length ? this.state.timelineData : tableData[this.props.timeline];
		// console.log(data);
		return (
			<div>
				<Container fluid className="horizontal-scrollable">
					{/* Stack the columns on mobile by making one full-width and the other half-width */}
					<Row>
						{data.map((eventData, i) => <EventColumn key={i} eventName={eventData.eventName} eventDesc={eventData.eventDesc} characters={eventData.characters} indexPath={[this.props.timeline, i]}/>)}
					</Row>
				</Container>
			</div>
		);
	}

}

export default Tabletest;

let testData = [
	{
		"eventName": "A Some Day",
		"eventDesc": "Really, an exceedingly some day",
		"place": "Kingdom Square",
		"time": "Afternoon",
		"characters": [
			{
				"name": "Random char",
				"desc": "The main protagonist, it me",
				"attributes": [
					{
						"name": "Some attr",
						"desc": "Some desc",
						"type": "fact"
					}
				]
			}
		]
	}
]

let todoData = [
	/*
	{
		"eventName": "Bleh",
		"eventDesc": "Coming up bleh",
		"place": "Kingdom Square",
		"time": "Afternoon",
		"characters": [
			{
				"name": "Funcs",
				"desc": "It's funcy",
				"attributes": [
					{
						"name": "Something",
						"desc": "Do something",
						"type": "fact"
					}
				]
			}
		]
	}
	*/
]

let tableData = {
	"MainStory": testData,
	"ToDo": todoData
}