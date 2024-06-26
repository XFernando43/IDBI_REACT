import { FormEvent, useState } from "react";
import { useIncidentStore } from "../stores/store";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function createIncidetForm() {
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const submitIncident = useIncidentStore((state) => state.submitIncident);

  function onChange(e: any) {
    const file = e.target.files[0];
    setImage(file);
  }
  function submitHandle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = localStorage.getItem("userId");
    
    if (image) {
      if(id){
        submitIncident(id,subject,type, details, image);
      }
    } else {
      console.error("No se ha seleccionado una imagen.");
    }
  }

  return (
    <Container onSubmit={submitHandle}>
      <Row className="d-flex flex-col justify-content-center align-items-center rounded shadow-lg pt-4 pb-4">
        <Col md={6}>
          <h1 className="Slabo font-semibold mb-4">
            Crear Reporte de Incidente
          </h1>
          <Form>
            <Form.Group controlId="subject">
              <Form.Label className="font-semibold text-lg">Asunto</Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label className="font-semibold text-lg">Tipo</Form.Label>
              <Form.Control
                as="select"
                className=" font-semibold"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Seleccionar tipo</option>
                <option value="ROOM">ROOM</option>
                <option value="SERVICE">SERVICE</option>
                <option value="FOOD">FOOD</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="details">
              <Form.Label className="font-semibold text-lg">
                Detalles *
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label className="font-semibold text-lg">Imagen</Form.Label>
              <Form.Control type="file" name="images" onChange={onChange} />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Enviar Reporte
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
