import React from "react";
import { useIncidentStore } from "../stores/store";
import IncidenTable from "../components/Incident/IncidentTable.component";
import PruebaComponent from "../components/prueba";
import IncidentsState from "../components/Incident/IncidentsStates.component";
import FiltersTable from "../components/Incident/Filterstable.component";

export default function createIncidetPage(){
  const fetchIncidentByUserId = useIncidentStore(state=>state.fetchIncidentByUserId);
  const Incidents = useIncidentStore(state=>state.incidentsResponse);  

  React.useEffect(()=>{
    fetchIncidentByUserId();
  },[])

  return (
    <div className=" pr-2 pl-2 grid grid-cols-2 gap-8 justify-content-center align-items-center vh-100 relative">
      <div>
        <IncidentsState/>
        <FiltersTable />
        <IncidenTable indicents={Incidents} />
      </div>
      <div className="">
        <PruebaComponent  />
      </div>
    </div>
  );
}

