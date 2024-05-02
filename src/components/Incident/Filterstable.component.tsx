import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function FiltersTable() {
  const [ DateFilterStart, setDateFilterStart] = React.useState("");
  const [DateFilterEnd, setDateFilterEnd] = React.useState("");
  const [StateFilter, setStateFilter] = React.useState("");

  function showAll(){
    console.log(DateFilterStart,DateFilterEnd,StateFilter);
  }

  return (
    <div className="p-3 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-2 font-semibold bg-slate-200">
      <Col md={4}>
        <Form.Group as={Row}>
          <Form.Label column md={3}>
            Desde:
          </Form.Label>
          <Col md={9}>
            <Form.Control type="date" value={DateFilterStart} onChange={(e)=> setDateFilterStart(e.target.value) } />
          </Col>
        </Form.Group>
      </Col>

      <Col md={4}>
        <Form.Group as={Row}>
          <Form.Label column md={3}>
            Hasta:
          </Form.Label>
          <Col md={9}>
            <Form.Control type="date" value={DateFilterEnd} onChange={(e)=> setDateFilterEnd(e.target.value) } />
          </Col>
        </Form.Group>
      </Col>

      <Col md={2}>
        <Form.Group as={Row}>
          <Form.Label column md={3}>
            Tipo:
          </Form.Label>
          <Col md={9}>
            <Form.Control as="select" value={StateFilter} onChange={(e)=>{setStateFilter(e.target.value)}}>
              <option value="">Todos</option>
              <option value="Abierto">Abierto</option>
              <option value="Cerrado">Cerrado</option>
              <option value="Proceso">Proceso</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Col>

      <Col md={2}>
        <Button
          variant="primary"
          type="submit"
          className="d-flex flex-row align-items-center gap-2"
          onClick={showAll}
        >
          <FaSearch />
          <span style={{ fontWeight: "bold" }}>Buscar</span>
        </Button>
      </Col>
    </div>
  );
}
