import { Card, Container, Row, Col } from "react-bootstrap";
import SingleAccordion from "./singleAccordion";
import CharacterCard from "./characterCard";
import '../css/tabletest.css'

function EventColumn(props)
{
	return (
        <Col md={6}>
            <SingleAccordion accTitle={props.eventName} accDesc={props.eventDesc}/>
            <Container>
                <Row>
                    {props.characters.map((character,i) => <CharacterCard key={i} width={6} characterName={character.name} characterAttributes={character.attributes}/>)}
                </Row>
            </Container>
        </Col>
    );
}

export default EventColumn;