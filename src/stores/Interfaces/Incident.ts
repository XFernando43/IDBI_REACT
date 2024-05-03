import { Iincident } from "../../models/Incidents";
import { IUser } from "../../models/newUser.model";

export interface Incident {
  incidents: Iincident[];
  user: IUser;
  incident:Iincident;
  success:Boolean;
  failed:Boolean;

  fetchIncidents: () => Promise<void>;
  fetchIncidentById:(incidentId:string)=>Promise<void>;

  orderByDate: (startDate: Date, endDate: Date) => Promise<void>;
  orderByState: (state:string) => void;
  
  formatDay:(date:string) => string;

  submitIncident:(subject:string,type:string,details:string,image:File)=> Promise<void>;
  
}
