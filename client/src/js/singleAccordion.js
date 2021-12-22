import React from "react";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsTrash, BsXLg } from "react-icons/bs";

import '../css/tabletest.css'
import { AccordionIconButton, CustomToggle } from './utilsComponents';

import { toggleAttribute } from './dbComms';

class SingleAccordion extends React.Component
{
    constructor(props) {
		super(props);

		this.state = {
            accTitle: "",
            accDesc: "",
			accHidden: false
		}

        this.indices = [];
	}

    componentDidMount()
    {
        this.setState({
            accTitle: this.props.accTitle,
            accDesc: this.props.accDesc,
            accHidden: this.props.accHidden
        });

        this.indices = this.props.indexPath;
    }

    hideAccordion = () =>
    {   
        let show = !this.state.accHidden;
        console.log(`accHidden: ${show}!`);
        toggleAttribute(this.indices, show, resp => {
            this.setState({accHidden: show});
        });
    }

    render()
    {
        let accordionClass = this.state.accHidden ? " accordion-hidden" : "accordion-visible";
        return (
            <Accordion className={"single-accordion " + accordionClass}>
                <Card>
                    <Card.Header>
                        <Container>
                            <Row>
                                <Col xs="1">
                                    <AccordionIconButton onClick={this.hideAccordion}>
                                        <BsXLg className="accordion-icon-button"/>
                                    </AccordionIconButton>
                                </Col>
                                <Col xs="10">
                                    <CustomToggle eventKey="0">{this.state.accTitle}</CustomToggle>
                                </Col>
                                <Col xs="1">
                                    <BsTrash className="accordion-icon-button"/>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>{this.state.accDesc}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default SingleAccordion;