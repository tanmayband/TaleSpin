import { Container, Row, Card, Col } from "react-bootstrap";
import SingleAccordion from './singleAccordion';
import { BsPlusLg } from "react-icons/bs";
import '../css/tabletest.css';
import { AccordionIconButton } from './utilsComponents';
import React from "react";

class CharacterCard extends React.Component
{
    constructor(props) {
		super(props);

		this.state = {
            width: 0,
            characterName: "",
			characterAttributes: []
		}

        this.indices = [];
	}

    componentDidMount()
    {
        this.setState({
            width: this.props.width,
            characterName: this.props.characterName,
            characterAttributes: this.props.characterAttributes
        });

        this.indices = this.props.indexPath;
    }

    newAttribute = () =>
    {
        console.log("new!");
    }

    render()
    {
        return (
            <Col md={this.state.width}>
                <Card className="character-card">
                    <Card.Body>
                        <Card.Title>
                            <Container>
                                <Row>
                                    <Col xs="11">
                                        {this.state.characterName}
                                    </Col>
                                    <Col xs="1">
                                        <AccordionIconButton onClick={this.newAttribute}>
                                            <BsPlusLg className="accordion-icon-button"/>
                                        </AccordionIconButton>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Title>

                        {this.state.characterAttributes.map((attribute, i) => <SingleAccordion key={i} accTitle={attribute.name} accDesc={attribute.desc} accHidden={attribute.hidden} indexPath={[...this.indices, i]}/>)}
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default CharacterCard;