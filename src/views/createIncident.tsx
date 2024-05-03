import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function CreateIncidentReport() {
  // Estados para los campos del formulario
  const [userId, setUserId] = useState('');
  const [subject, setSubject] = useState('');
  const [type, setType] = useState(''); // Selector
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null); // Para el archivo de imagen
  const [imgUrl, setImgUrl] = useState('');

 
  return (
    <Container>
    <Row className="justify-content-center mt-5">
      <Col md={8}>
        <div className="incident-form">
          <h1 className="Slabo font-semibold mb-4">Crear Reporte de Incidente</h1>
          <Form>           

            <Form.Group controlId="subject">
              <Form.Label>Asunto *</Form.Label>
              <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="type">
              <Form.Label>Tipo *</Form.Label>
              <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="">Seleccionar tipo</option>
                <option value="SERVICE">Servicio</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="details">
              <Form.Label>Detalles *</Form.Label>
              <Form.Control as="textarea" rows={5} value={details} onChange={(e) => setDetails(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
            {imgUrl && <img src={imgUrl} alt="Preview" className="img-preview" />}
            <Button variant="primary" type="submit" className="mt-3">Enviar Reporte</Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
  );
}

export default CreateIncidentReport;
