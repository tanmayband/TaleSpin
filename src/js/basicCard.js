import { Card } from "react-bootstrap";

function basicCard(props) {
	return (
		<Card>
			<Card.Title>{props.cardTitle}</Card.Title>
		</Card>
	);
}

export default basicCard;