import { Container } from "react-bootstrap";
import IncidenTable from "../components/Incident/IncidentTable";
import IncidentsState from "../components/Incident/IncidentsStates";
import FiltersTable from "../components/Incident/Filterstable";
import { useIncidentStore } from "../stores/store";
import React from "react";
export default function HomePage() {
  const Incidents = useIncidentStore(state=>state.incidentsResponse);
  const fetchIncidents = useIncidentStore(state=>state.fetchIncidents);
  

  React.useEffect(()=>{
    fetchIncidents();
  },[]);



  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Container>
        <IncidentsState/>
        <FiltersTable />
        <IncidenTable indicents={Incidents} />
      </Container>
    </div>
  );
}
