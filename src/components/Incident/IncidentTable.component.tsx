import React from "react";
import { getIncidents } from "../../Services/IncidentsService";
import { FaCircle, FaUser } from "react-icons/fa";

export default function IncidenTable() {
  const [Incidents, setIncidents] = React.useState<Iincident[]>([]);

  React.useEffect(() => {
    getIncidents().then((data) => {
      console.log(data[0]);
      setIncidents(data);
      console.log("-->", data);
    });
  }, []);

  return (
    <>
      <table className="border border-slate-300">
        <thead className="border-1 text-sm font-semibold uppercase tracking-wider">
          <tr>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
              Proceso
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
              Estado
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
              Incidente
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
              Descripción
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
              Usuario
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
              Imagen
            </th>
            <th className="hover:bg-blue-300 Slabo text-sm text-black font-mono px-6 py-3 border-r-2 border-black">
              Fecha
            </th>
          </tr>
        </thead>
        <tbody className="border-2 text-center text-gray-900">
          {Incidents.map((incident, index) => (
            <tr key={index} className="border-b-4 hover:bg-blue-200">
              <td className="px-14">
                <FaCircle className="text-red-500 text-5xl" />
              </td>
              <td className="Slabo font-semibold text-lg text-normal px-6 py-4">
                {incident.status}
              </td>
              <td className="Slabo text-sm text-normal px-6 py-4">
                Ocurrio Un problema en la habitación numero 203
                {incident.details}
              </td>
              <td className="Slabo text-sm text-normal px-6 py-4">
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
                <FaUser className="bg-blue-500 rounded-full text-3xl" />{" "}
                JAVIERSITO EL PODEROSITO
              </td>
              <td className="Slabo text-sm text-normal px-6 py-4">
                      {incident.updatedAt}

              </td>
            </tr>
          ))}

        </tbody>

      </table>
    </>
  );
}
