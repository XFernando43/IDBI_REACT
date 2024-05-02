import { Container } from "react-bootstrap";
import IncidenTable from "../components/Incident/IncidentTable.component";
import IncidentsState from "../components/Incident/IncidentsStates.component";
import FiltersTable from "../components/Incident/Filterstable.component";

export default function HomePage() {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Container>
        
        <IncidentsState/>
        <FiltersTable />

        <IncidenTable />
      </Container>
    </div>
  );
}
