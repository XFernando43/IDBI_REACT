import React from "react";
import { useIncidentStore } from "../stores/store";
import IncidenTable from "../components/Incident/IncidentTable.component";

function CreateIncidentReport() {

  const fetchIncidentByUserId = useIncidentStore(state=>state.fetchIncidentByUserId);
  const Incidents = useIncidentStore(state=>state.incidents);  

  React.useEffect(()=>{
    fetchIncidentByUserId("1");
  },[])

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 relative">
      <IncidenTable indicents={Incidents} />
      
    </div>
  );
}

export default CreateIncidentReport;
