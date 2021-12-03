import { Accordion } from "react-bootstrap";

function SingleAccordion(props)
{
    return (
        <Accordion>
            <Accordion.Item eventKey="0" className="single-accordion">
                <Accordion.Header className="single-accordion">{props.accTitle}</Accordion.Header>
                <Accordion.Body className="single-accordion">
                    {props.accDesc}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default SingleAccordion;