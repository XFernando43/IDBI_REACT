import { Container, Card, Badge, ListGroup } from "react-bootstrap";
import { useIncidentStore } from "../stores/store";
import { useEffect } from "react";
import { useParams } from "wouter";

export default function ReviewIncidentView() {
    const fetchIncidentByID = useIncidentStore(state => state.fetchIncidentById);
    const incident = useIncidentStore(state => state.incident);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchIncidentByID(id);
        }
    }, [id]);

    return (
        <Container>
            {incident && (
                <Card>
                    <Card.Body>
                        <Card.Title>{incident.subject}</Card.Title>
                        <Badge bg={incident.status === 'resolved' ? 'success' : 'danger'}>{incident.status}</Badge>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Type:</strong> {incident.type}</ListGroup.Item>
                            <ListGroup.Item><strong>Details:</strong> {incident.details}</ListGroup.Item>
                            {incident.imageUrl && <ListGroup.Item><img src={incident.imageUrl} alt="Incident" className=" max-w-md" /></ListGroup.Item>}
                            <ListGroup.Item><strong>Created at:</strong> {incident.createAt}</ListGroup.Item>
                            <ListGroup.Item><strong>Updated at:</strong> {incident.updateAt}</ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Reported by:</strong> {incident.details}
                                <br />
                                <small><strong>Email:</strong> {incident.incidentId}</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            )}

            <button onClick={()=>{console.log(incident)}}>ACA</button>
        </Container>
    );
}
