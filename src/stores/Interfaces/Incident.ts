import { IincidentReponse } from "../../models/response/IncidentResponse.model";
import { IUserResponse } from "../../models/response/user.response.model";

export interface Incident {
  incidentsResponse: IincidentReponse[];
  userResponse: IUserResponse;
  incident:IincidentReponse;
  

  success:Boolean;
  failed:Boolean;

  fetchIncidents: () => Promise<void>;
  fetchIncidentById:(incidentId:string)=>Promise<void>;

  fetchIncidentsByUserId:()=> Promise<void>;

  orderByDate: (startDate: Date, endDate: Date) => Promise<void>;
  orderByState: (state:string) => void;
  
  formatDay:(date:string) => string;

  submitIncident:(userId:string,subject:string,type:string,details:string,image:File)=> Promise<void>;
  
}
