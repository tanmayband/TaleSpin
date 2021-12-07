import { Accordion, Col, Container, Row } from "react-bootstrap";
import { BsTrash, BsXLg } from "react-icons/bs";

import '../css/tabletest.css'

function SingleAccordion(props)
{
    let accordionClass = props.accHidden ? " accordion-hidden" : "accordion-visible";
    return (
        <Accordion>
            <Accordion.Item eventKey="0" className={"single-accordion " + accordionClass}>
                <Accordion.Header>
                    <Container>
                        <Row>
                            <Col xs="1">
                                <BsXLg className="accordion-icon-button"/>
                            </Col>
                            <Col xs="10">
                                {props.accTitle}
                            </Col>
                            <Col xs="1">
                                <BsTrash className="accordion-icon-button"/>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Header>
                <Accordion.Body>
                    {props.accDesc}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default SingleAccordion;