import { IincidentRequest } from "../../models/request/getIncident.model";
import { InewUserRequest } from "../../models/request/newUser.model";

export interface Incident {
  incidents: IincidentRequest[];
  user: InewUserRequest;
  incident:IincidentRequest;
  success:Boolean;
  failed:Boolean;

  fetchIncidents: () => Promise<void>;
  fetchIncidentById:(incidentId:string)=>Promise<void>;

  fetchIncidentByUserId:()=> Promise<void>;

  orderByDate: (startDate: Date, endDate: Date) => Promise<void>;
  orderByState: (state:string) => void;
  
  formatDay:(date:string) => string;

  submitIncident:(subject:string,type:string,details:string,image:File)=> Promise<void>;
  
}
