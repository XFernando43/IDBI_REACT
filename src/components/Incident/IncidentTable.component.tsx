import React from "react";
import { FaCircle, FaUser } from "react-icons/fa";
import { useIncidentStore } from "../../stores/store";

export default function IncidenTable() {
  const fetchIncidents = useIncidentStore((state) => state.fetchIncidents);
  const _Incidents = useIncidentStore((state) => state.incidents);
  let formatDate = useIncidentStore((state) => state.formatDay);

  React.useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <>
      <table className="sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-full">
        <thead className="text-sm font-semibold uppercase tracking-wider">
          <tr>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r border-slate-700">
              Proceso
            </th>

            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r border-slate-700">
              Estado
            </th>

            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r border-slate-700">
              Tipo
            </th>

            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r border-slate-700">
              Incidente
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r border-slate-700">
              Descripción
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r border-slate-700">
              Usuario
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r border-slate-700">
              Imagen
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r border-slate-700">
              Fecha
            </th>
          </tr>
        </thead>
        <tbody className="text-center text-gray-900">
          {_Incidents.map((incident, index) => (
            <tr key={index} className="hover:bg-blue-200">
              <td className="px-14">
                
                {incident.status === "OPEN" ? (
                  <FaCircle className="text-green-500 text-5xl" />
                ) : incident.status === "PROCESS" ? (
                  <FaCircle className="text-blue-800 text-5xl" />
                ) : incident.status === "CLOSE" ? (
                  <FaCircle className="text-orange-300 text-5xl" />
                ) : incident.status === "ERROR" ? (
                  <FaCircle className="text-red-500 text-5xl" />
                ) 
                
                : null}

              </td>
              <td className="Slabo font-semibold text-lg text-normal px-6 py-4">
                {incident.status}
              </td>

              <td className="Slabo font-semibold text-lg text-normal px-6 py-4">
                {incident.type}
              </td>

              <td className="Slabo text-sm text-normal px-6 py-4">
                Ocurrio Un problema en la habitación numero 203
                {incident.subject}
              </td>
              <td className="Slabo text-sm text-normal px-6 py-4 text-start">
                {incident.details}
              </td>
              <td className="Slabo text-sm text-normal px-6 py-4">
                <img
                  className="max-w-48 rounded"
                  src={incident.imageUrl}
                  alt="Incident"
                />
              </td>
              <td className="flex flex-row justify-center items-center px-6 py-16">
                <FaUser className=" text-blue-500 text-5xl" />
                {incident.user.name} {incident.user.lastName}
              </td>
              <td className="Slabo text-sm text-normal px-6 py-4">
                {formatDate(incident.createAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
