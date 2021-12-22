import React from "react";
import { Form } from "react-bootstrap";
import '../css/testpad.css'

class Testpad extends React.Component
{
	constructor(props) {
		super(props);

		this.state = {
            currentTime: 0
		}

        this.laneDuration = 4;
        this.noteTimeline = [0,0.5,1,1.5,2,2.5,3.1,4,4.8,6.1,6.4,7,8.23,9,10,12,12.4,14,14.3];
	}

    changeTime = (event) =>
    {
        this.setState({currentTime: Number(event.target.value)})
    }

    render()
    {
        let laneWidth = 1000;
        let laneHeight = 50;
        let startPos = -25;
        let oneSecIncr = 250;
        let noteStyle = {
            width: laneHeight,
            height: laneHeight,
            backgroundColor: "#979751",
            opacity: 0.5,
            position: "absolute",
            left: startPos
        };
        let noteDiv = <div style={noteStyle}>Note</div>
        let notes = [];

        // find currentTime's (closest) index in noteTimeline array
        let noteIdx = 0;
        let currTime = this.state.currentTime;
        while(currTime > this.noteTimeline[noteIdx])
        {
            noteIdx++;
        }
        
        let lastNoteTime = this.laneDuration + currTime;
        while(
            currTime >= this.noteTimeline[noteIdx] ||
            this.noteTimeline[noteIdx] <= lastNoteTime
        )
        {
            console.log(`${this.noteTimeline[noteIdx]}s`)
            let noteTime = this.noteTimeline[noteIdx];
            noteTime -= currTime;
            
            let left = startPos + (oneSecIncr * noteTime);
            notes.push(<div key={noteIdx} style={Object.assign({}, noteStyle, {left: left})}>Note {this.noteTimeline[noteIdx]}s</div>);

            noteIdx++;
        }



        return (
            <div>
                <div style={{width: laneWidth, height: laneHeight, backgroundColor: "#333", display: "flex"}}>
                    {notes}
                </div>
                <div style={{width: laneWidth, height: laneHeight, backgroundColor: "#1c1c1c", textAlign: "center"}}>
                   &lt;--------- {this.laneDuration} sec / {laneWidth} px ---------&gt;
                </div>
                <>
                    <Form.Label>{this.state.currentTime}</Form.Label>
                    <br/>
                    <Form.Range min={0} max={Math.ceil(this.noteTimeline[this.noteTimeline.length - 1])} step={0.1} value={this.state.currentTime} onChange={this.changeTime} style={{width: 500}}/>
                </>
            </div>
        )
    }
}

export default Testpad;