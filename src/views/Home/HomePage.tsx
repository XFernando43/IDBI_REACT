import React, { useState } from "react";
import {
  Container,
  Table,
  Form,
  Row,
  Col,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaCircle, FaSearch, FaUser } from "react-icons/fa";
import { getIncidents } from "../../Services/IncidentsService";
import "./Home.style.css";

export default function HomePage() {
  const [filtroFecha, setFiltroFecha] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  const [Incidents, SetIncidents] = useState([]);

  React.useEffect(() => {
    getIncidents().then((data) => {
      console.log(data.data);
      SetIncidents(data.data);
      console.log("-->", Incidents);
    });
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        <div className="Estate-Container">
          <span className="Slabo Estate-Title">Estado </span>

          <div className="Estate-Container">
            <input type="checkbox" id="progress"></input>
            <div className="Label-Color">
              <FaCircle style={{ color: "orange" }}>●</FaCircle>
              <label htmlFor="progress" className="Slabo State-Design">
                {" "}
                En Progreso
              </label>
            </div>
          </div>

          <div className="Estate-Container">
            <input type="checkbox" id="ready"></input>
            <div className="Label-Color">
              <FaCircle style={{ color: "blue" }}>●</FaCircle>
              <label htmlFor="ready" className="Slabo State-Design">
                {" "}
                Preparado
              </label>
            </div>
          </div>

          <div className="Estate-Container">
            <input type="checkbox" id="complete"></input>
            <div className="Label-Color">
              <FaCircle style={{ color: "aqua" }}>●</FaCircle>
              <label htmlFor="complete" className="Slabo State-Design">
                {" "}
                Completado
              </label>
            </div>
          </div>

          <div className="Estate-Container">
            <input type="checkbox" id="error"></input>
            <div className="Label-Color">
              <FaCircle style={{ color: "red" }} />
              <label htmlFor="error" className="Slabo State-Design">
                {" "}
                Error
              </label>
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
            <Button
              variant="primary"
              type="submit"
              className="d-flex flex-row align-items-center gap-2"
            >
              <FaSearch />
              <span style={{ fontWeight: "bold" }}>Buscar</span>
            </Button>
          </Col>
        </Row>

        <table className="min-w-full border border-slate-300">
          <thead className="border-1 text-sm font-semibold uppercase tracking-wider">
            <tr>
              <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
                Proceso
              </th>
              <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
                Estado
              </th>
              <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
                Incidente
              </th>
              <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
                Descripción
              </th>
              <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
                Usuario
              </th>
              <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
                Imagen
              </th>
              <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody className="border-2 text-center text-gray-900">
            {Incidents.map((incident, index) => (
              <tr key={index} className="border-b-4 hover:bg-blue-200">
                <td className="px-14">
                  <FaCircle className="text-red-500 text-5xl" />
                </td>
                <td className="Slabo font-semibold text-lg text-normal px-6 py-4">
                  OPEN
                </td>
                <td className="Slabo text-sm text-normal px-6 py-4">
                  Ocurrio Un problema en la habitación numero 203
                </td>
                <td className="Slabo text-sm text-normal px-6 py-4">
                  Durante el sexo rompimos una cama y se salio varias tablas
                  necesitan asistencia inmediata
                </td>
                <td className="Slabo text-sm text-normal px-6 py-4">
                  <img
                    className="max-w-48 rounded"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/08/b7/0b/03/cama-rota-una-parte.jpg"
                    alt="Incident"
                  />
                </td>
                <td className="flex flex-row justify-center items-center px-6 py-16">
                  <FaUser className="bg-blue-500 rounded-full text-3xl" />{" "}
                  JAVIERSITO EL PODEROSITO
                </td>
                <td className="Slabo text-sm text-normal px-6 py-4">
                  17/12/2019 12:30 am
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}
