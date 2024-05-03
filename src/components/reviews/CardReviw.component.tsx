import { useEffect } from "react";
import { Badge, Card, Container, ListGroup } from "react-bootstrap";
import { useIncidentStore } from "../../stores/store";
import { useParams } from "wouter";

export default function CardReview(){
    const fetchIncidentByID = useIncidentStore(state => state.fetchIncidentById);
    const formatoFecha = useIncidentStore(state=>state.formatDay);
    const incident = useIncidentStore(state => state.incident);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchIncidentByID(id);
        }
    }, [id]);


    return(
        <Container>
        {incident && (
            <Card>
                <Card.Body>
                    <Card.Title>{incident.subject}</Card.Title>
                    <Badge bg={incident.status === 'CLOSE' ? 'success' : 'danger'}>{incident.status}</Badge>
                    <ListGroup variant="flush" className="">
                        <ListGroup.Item><strong>Type:</strong> {incident.type}</ListGroup.Item>
                        <ListGroup.Item><strong>Details:</strong> {incident.details}</ListGroup.Item>
                        {incident.imageUrl && <ListGroup.Item><img src={incident.imageUrl} alt="Incident" className="max-w-md" /></ListGroup.Item>}
                        <ListGroup.Item><strong>Created at: </strong> {formatoFecha(incident.createAt)} </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Reported by:</strong> {incident.user.name} {incident.user.lastName}
                            <br />
                            <small><strong>Phone:</strong> {incident.user.phone}</small>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        )}

    </Container>
    );
}