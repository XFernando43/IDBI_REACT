import { Iincident } from "../../models/Incidents";
import { IUser } from "../../models/newUser.model";

export interface Incident {
  incidents: Iincident[];
  user: IUser;

  fetchIncidents: () => Promise<void>;
}
