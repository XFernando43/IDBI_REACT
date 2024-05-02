import { useState } from "react";
import {
  Container,
  Table,
  Form,
  Row,
  Col,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaCircle,FaSearch } from 'react-icons/fa';
import "./Home.style.css";

export default function HomePage() {
  const [dashboardData, setDashboardData] = useState([
    {
      id: 1,
      estado: "Abierto",
      incidente: "Problema con el servidor",
      descripcion: "El servidor ha dejado de responder.",
      img: "url_imagen1.jpg",
      fecha: "2024-05-01",
    },
    {
      id: 2,
      estado: "Cerrado",
      incidente: "Error en la aplicación",
      descripcion: "La aplicación se bloquea al iniciar sesión.",
      img: "url_imagen2.jpg",
      fecha: "2024-04-30",
    },
    // Más datos...
  ]);

  const [filtroFecha, setFiltroFecha] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  const filteredData = dashboardData.filter((item) => {
    if (filtroFecha && item.fecha !== filtroFecha) {
      return false;
    }
    if (filtroEstado && item.estado !== filtroEstado) {
      return false;
    }
    return true;
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container>

        <div className="Estate-Container">
          
          <span className="Slabo Estate-Title">Estado </span>

          <div className="Estate-Container">
            <input type="checkbox" id="progress"></input>
            <div className="Label-Color">
              <FaCircle style={{color:'orange'}}>●</FaCircle>
              <label htmlFor="progress" className="Slabo State-Design"> En Progreso</label>
            </div>
          </div>

          <div className="Estate-Container">
            <input type="checkbox" id="ready"></input>
            <div className="Label-Color">
              <FaCircle style={{color:'blue'}}>●</FaCircle>
              <label htmlFor="ready" className="Slabo State-Design"> Preparado</label>
            </div>
          </div>

          <div className="Estate-Container">
            <input type="checkbox" id="complete"></input>
            <div className="Label-Color">
              <FaCircle style={{color:'aqua'}}>●</FaCircle>
              <label htmlFor="complete" className="Slabo State-Design"> Completado</label>
            </div>
          </div>

          <div className="Estate-Container">
            <input type="checkbox" id="error"></input>
            <div className="Label-Color">
              <FaCircle style={{color:'red'}} />
              <label htmlFor="error" className="Slabo State-Design"> Error</label>
            </div>
          </div>

        </div>


        <Row className="mt-3 Filter-Container">
          <Col md={3}>
            <Form.Group as={Row}>
              <Form.Label column md={3}>
                Desde:
              </Form.Label>
              <Col md={9}>
                <Form.Control type="date" value={filtroFecha} />
              </Col>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group as={Row}>
              <Form.Label column md={3}>
                Hasta:
              </Form.Label>
              <Col md={9}>
                <Form.Control type="date" value={filtroFecha} />
              </Col>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group as={Row}>
              <Form.Label column md={3}>
                Tipo:
              </Form.Label>
              <Col md={9}>
                <Form.Control as="select" value={filtroEstado}>
                  <option value="">Todos</option>
                  <option value="Abierto">Abierto</option>
                  <option value="Cerrado">Cerrado</option>
                  <option value="Proceso">Proceso</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Button variant="primary" type="submit" className="d-flex flex-row align-items-center gap-2">
              <FaSearch/>
              <span style={{ fontWeight: "bold" }}>Buscar</span>
            </Button>
          </Col>
        </Row>

        <hr/>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Incidente</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.estado}</td>
                <td>{item.incidente}</td>
                <td>{item.descripcion}</td>
                <td>
                  <img
                    src={item.img}
                    alt="Imagen"
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>{item.fecha}</td>
              </tr>
            ))}
          </tbody>
        </Table>
            


      </Container>
    </div>
  );
}
