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

function SingleAccordion2(props)
{
    let accordionClass = props.accHidden ? " accordion-hidden" : "accordion-visible";
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
                            <Col xs="10" on>
                                <CustomToggle eventKey="0">{props.accTitle}</CustomToggle>
                            </Col>
                            <Col xs="1">
                                <BsTrash className="accordion-icon-button"/>
                            </Col>
                        </Row>
                    </Container>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>{props.accDesc}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default SingleAccordion2;