import React from "react";
import { Accordion, Button, Card, Col, Container, Row, useAccordionButton } from "react-bootstrap";
import { BsTrash, BsXLg } from "react-icons/bs";

import '../css/tabletest.css'

function hideAccordion()
{
    console.log("hidden!");
}

function AccordionIconButton({ children, onClick })
{
    return (
        <div type="button" onClick={onClick}>
            {children}
        </div>
    );
}

function CustomToggle({ children, eventKey })
{
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <div type="button" onClick={decoratedOnClick}>
            {children}
        </div>
    );
}

class SingleAccordion extends React.Component
{
    constructor(props) {
		super(props);

		this.state = {
            accTitle: "",
            accDesc: "",
			accHidden: false
		}
	}

    componentDidMount()
    {
        this.setState({
            accTitle: this.props.accTitle,
            accDesc: this.props.accDesc,
            accHidden: this.props.accHidden
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
                                    <AccordionIconButton onClick={hideAccordion}>
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