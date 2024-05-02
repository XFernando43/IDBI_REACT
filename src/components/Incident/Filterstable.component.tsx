import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function FiltersTable() {
  const [filtroFecha, setFiltroFecha] = React.useState("");
  const [filtroEstado, setFiltroEstado] = React.useState("");


    return (
      <Row className="bg-slate-400">
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
    );
  }
  