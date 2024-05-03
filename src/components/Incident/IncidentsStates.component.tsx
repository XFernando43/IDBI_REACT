import { FaCircle } from "react-icons/fa";

export default function IncidentsState() {
  return (
    <div className="flex flex-col">
      <div className="p-3 bg-slate-200 flex flex-row gap-4 items-center font-semibold">
        <span className="Slabo">Estado </span>

        <div className="flex flex-row gap-2 justify-center items-center">
          <FaCircle className=" text-green-500" />
          <label htmlFor="progress" className="Slabo ">
            Open
          </label>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center">
          <FaCircle className=" text-blue-800"/>
          <label htmlFor="progress" className="Slabo ">
            Process
          </label>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center">
          <FaCircle className=" text-orange-300" />
          <label htmlFor="complete" className="Slabo State-Design">
            Close
          </label>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center">
          <FaCircle className=" text-red-500" />
          <label htmlFor="error" className="Slabo State-Design">
            Error
          </label>
        </div>


      </div>
    </div>
  );
}
