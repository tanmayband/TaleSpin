import { Accordion, Card, Col } from "react-bootstrap";
import SingleAccordion from './singleAccordion';
import '../css/tabletest.css'

function CharacterCard(props)
{
    return (
        <Col md={props.width}>
            <Card className="single-accordion">
                <Card.Body>
                    <Card.Title>{props.characterName}</Card.Title>

                    {props.characterAttributes.map(attribute => <SingleAccordion accTitle={attribute.name}accDesc={attribute.desc}/>)}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CharacterCard;