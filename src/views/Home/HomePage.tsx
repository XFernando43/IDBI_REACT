import { Container } from "react-bootstrap";
import IncidenTable from "../../components/Incident/IncidentTable.component";
import FiltersTable from "../../components/Incident/Filterstable.component";

import "./Home.style.css";
import IncidentsState from "../../components/Incident/IncidentsStates.component";
export default function HomePage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        
        <IncidentsState/>
        <FiltersTable />
        <IncidenTable />
      </Container>
    </div>
  );
}
