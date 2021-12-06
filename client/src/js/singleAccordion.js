import { Accordion } from "react-bootstrap";

import '../css/tabletest.css'

function SingleAccordion(props)
{
    let accordionClass = props.accHidden ? " accordion-hidden" : "accordion-visible";
    return (
        <Accordion>
            <Accordion.Item eventKey="0" className={"single-accordion " + accordionClass}>
                <Accordion.Header>{props.accTitle}</Accordion.Header>
                <Accordion.Body>
                    {props.accDesc}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default SingleAccordion;