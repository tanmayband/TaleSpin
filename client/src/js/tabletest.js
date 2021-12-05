import React from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

import '../css/tabletest.css'
import EventColumn from "./eventColumn";
import * as Utils from './utils';

class Tabletest extends React.Component
{
	constructor(props) {
		super(props);
	}

	componentDidMount()
	{
		axios
		.get("http://localhost:3001/timeline/MainStory")
		.then(resp => {
			Utils.printLog(resp.data);
		})
		.catch(error => {
			Utils.printLog(error);
		});
	}

	render()
	{
		let data = tableData[this.props.timeline];
		return (
			<div>
				<Container fluid className="horizontal-scrollable">
					{/* Stack the columns on mobile by making one full-width and the other half-width */}
					<Row>
						{data.map((eventData, i) => <EventColumn key={i} eventName={eventData.eventName} eventDesc={eventData.eventDesc} characters={eventData.characters}/>)}
					</Row>
				</Container>
			</div>
		);
	}

}

export default Tabletest;

let testData = [
	{
		"eventName": "A Normal Day",
		"eventDesc": "Really, an exceedingly normal day",
		"place": "Kingdom Square",
		"time": "Afternoon",
		"characters": [
			{
				"name": "Me",
				"desc": "The main protagonist, it me",
				"attributes": [
					{
						"name": "College kid",
						"desc": "Tronix engg, stays at hostel, low on money",
						"type": "fact"
					},
					{
						"name": "Freelancer",
						"desc": "Earns a little money on the side, building circuits",
						"type": "fact"
					},
					{
						"name": "Foster parents",
						"desc": "Indifferent towards them",
						"type": "dislike"
					},
					{
						"name": "Concept of music",
						"desc": "Deems it unnecessary; a distraction",
						"type": "dislike"
					},
					{
						"name": "Find birth parents",
						"desc": "Closure from foster parents",
						"type": "goal"
					},
					{
						"name": "What if never found?",
						"desc": "Life's goal wasted",
						"type": "fear"
					},
					{
						"name": "Money: Sister",
						"desc": "Sent by sister this month",
						"type": "item"
					}
				]
			},
			{
				"name": "Sister",
				"desc": "The main protagonist's sister'",
				"attributes": [
					{
						"name": "Musician",
						"desc": "Decent, mostly instruments",
						"type": "fact"
					},
					{
						"name": "Living separately",
						"desc": "Small apartment with stuio",
						"type": "fact"
					},
					{
						"name": "Birth parents",
						"desc": "Loves them",
						"type": "like"
					},
					{
						"name": "Concept of music",
						"desc": "Deems it unnecessary; a distraction",
						"type": "like"
					},
					{
						"name": "Support my graduation",
						"desc": "Main goal",
						"type": "goal"
					},
					{
						"name": "What if never found?",
						"desc": "Life's goal wasted",
						"type": "fear"
					},
					{
						"name": "Money: Sister",
						"desc": "Sent by sister this month",
						"type": "item"
					}
				]
			}
		]
	},
	{
		"eventName": "A Different Day",
		"eventDesc": "Really, an exceedingly normal day",
		"place": "Kingdom Square",
		"time": "Afternoon",
		"characters": [
			{
				"name": "Me",
				"desc": "The main protagonist, it me",
				"attributes": [
					{
						"name": "College kid",
						"desc": "Tronix engg, stays at hostel, low on money",
						"type": "fact"
					},
					{
						"name": "Freelancer",
						"desc": "Earns a little money on the side, building circuits",
						"type": "fact"
					},
					{
						"name": "Foster parents",
						"desc": "Indifferent towards them",
						"type": "dislike"
					},
					{
						"name": "Concept of music",
						"desc": "Deems it unnecessary; a distraction",
						"type": "dislike"
					},
					{
						"name": "Find birth parents",
						"desc": "Closure from foster parents",
						"type": "goal"
					},
					{
						"name": "What if never found?",
						"desc": "Life's goal wasted",
						"type": "fear"
					},
					{
						"name": "Money: Sister",
						"desc": "Sent by sister this month",
						"type": "item"
					}
				]
			},
			{
				"name": "Sister",
				"desc": "The main protagonist's sister'",
				"attributes": [
					{
						"name": "Musician",
						"desc": "Decent, mostly instruments",
						"type": "fact"
					},
					{
						"name": "Living separately",
						"desc": "Small apartment with stuio",
						"type": "fact"
					},
					{
						"name": "Birth parents",
						"desc": "Loves them",
						"type": "like"
					},
					{
						"name": "Concept of music",
						"desc": "Deems it unnecessary; a distraction",
						"type": "like"
					},
					{
						"name": "Support my graduation",
						"desc": "Main goal",
						"type": "goal"
					},
					{
						"name": "What if never found?",
						"desc": "Life's goal wasted",
						"type": "fear"
					},
					{
						"name": "Money: Sister",
						"desc": "Sent by sister this month",
						"type": "item"
					}
				]
			}
		]
	},
	{
		"eventName": "The Best Day",
		"eventDesc": "Really, an exceedingly normal day",
		"place": "Kingdom Square",
		"time": "Afternoon",
		"characters": [
			{
				"name": "Me",
				"desc": "The main protagonist, it me",
				"attributes": [
					{
						"name": "College kid",
						"desc": "Tronix engg, stays at hostel, low on money",
						"type": "fact"
					},
					{
						"name": "Freelancer",
						"desc": "Earns a little money on the side, building circuits",
						"type": "fact"
					},
					{
						"name": "Foster parents",
						"desc": "Indifferent towards them",
						"type": "dislike"
					},
					{
						"name": "Concept of music",
						"desc": "Deems it unnecessary; a distraction",
						"type": "dislike"
					},
					{
						"name": "Find birth parents",
						"desc": "Closure from foster parents",
						"type": "goal"
					},
					{
						"name": "What if never found?",
						"desc": "Life's goal wasted",
						"type": "fear"
					},
					{
						"name": "Money: Sister",
						"desc": "Sent by sister this month",
						"type": "item"
					}
				]
			},
			{
				"name": "Sister",
				"desc": "The main protagonist's sister'",
				"attributes": [
					{
						"name": "Musician",
						"desc": "Decent, mostly instruments",
						"type": "fact"
					},
					{
						"name": "Living separately",
						"desc": "Small apartment with stuio",
						"type": "fact"
					},
					{
						"name": "Birth parents",
						"desc": "Loves them",
						"type": "like"
					},
					{
						"name": "Concept of music",
						"desc": "Deems it unnecessary; a distraction",
						"type": "like"
					},
					{
						"name": "Support my graduation",
						"desc": "Main goal",
						"type": "goal"
					},
					{
						"name": "What if never found?",
						"desc": "Life's goal wasted",
						"type": "fear"
					},
					{
						"name": "Money: Sister",
						"desc": "Sent by sister this month",
						"type": "item"
					}
				]
			}
		]
	}
]

let todoData = [
	{
		"eventName": "Next",
		"eventDesc": "Coming up next",
		"place": "Kingdom Square",
		"time": "Afternoon",
		"characters": [
			{
				"name": "Functionaity",
				"desc": "The workings",
				"attributes": [
					{
						"name": "Mongo Connection R",
						"desc": "Connect to mongo and read from there",
						"type": "fact"
					},
					{
						"name": "Mongo Connection W",
						"desc": "Write to mongo",
						"type": "fact"
					},
					{
						"name": "Hidden vs Deleted attrs",
						"desc": "Put them in corresponding fields",
						"type": "fact"
					}
				]
			},
			{
				"name": "Visuals",
				"desc": "The looks",
				"attributes": [
					{
						"name": "Colour attributes",
						"desc": "According to type: fact, like etc",
						"type": "fact"
					},
					{
						"name": "Hidden vs Deleted attrs",
						"desc": "Strikethrough vs removed",
						"type": "fact"
					}
				]
			}
		]
	}
]

let tableData = {
	"timeline0": testData,
	"todo": todoData
}