import { FaCircle } from "react-icons/fa";

export default function IncidentsState() {
  return (
    <div className="flex flex-col">
      <div className="p-3 bg-slate-200 flex flex-row gap-4 items-center font-semibold">
        <span className="Slabo">Estado </span>

        <div className="flex flex-row gap-2 justify-center items-center">
          <FaCircle style={{ color: "orange" }} />
          <label htmlFor="progress" className="Slabo ">
            En Progreso
          </label>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center">
          <FaCircle style={{ color: "blue" }} />
          <label htmlFor="progress" className="Slabo ">
            Preparado
          </label>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center">
          <FaCircle style={{ color: "aqua" }} />
          <label htmlFor="complete" className="Slabo State-Design">
            Completado
          </label>
        </div>

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
