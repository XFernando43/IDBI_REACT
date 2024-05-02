import { FaCircle } from "react-icons/fa";

export default function IncidentsState(){
    return(
        <div className="bg-slate-400 flex flex-row gap-4 items-center">
        <span className="Slabo font-semibold">Estado </span>
        <div className="p-3 bg-slate-400 flex flex-row gap-4 items-center">
          <input type="checkbox" id="progress"></input>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaCircle style={{ color: "orange" }} />
            <label htmlFor="progress" className="Slabo font-semibold">
              En Progreso
            </label>
          </div>
        </div>
        <div className="p-3 bg-slate-400 flex flex-row gap-4 items-center">
          <input type="checkbox" id="progress"></input>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaCircle style={{ color: "blue" }} />
            <label htmlFor="progress" className="Slabo font-semibold">
              Preparado
            </label>
          </div>
        </div>
        <div className="p-3 bg-slate-400 flex flex-row gap-4 items-center">
          <input type="checkbox" id="progress"></input>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaCircle style={{ color: "aqua" }} />
            <label htmlFor="complete" className="Slabo State-Design">
              Completado
            </label>
          </div>
        </div>
        <div className="p-3 bg-slate-400 flex flex-row gap-4 items-center">
          <input type="checkbox" id="progress"></input>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaCircle style={{ color: "red" }} />
            <label htmlFor="error" className="Slabo State-Design">
              Error
            </label>
          </div>
        </div>
      </div>

    );
}