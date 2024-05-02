import React from "react";
import { FaCircle } from "react-icons/fa";

export default function IncidentsState() {
  const [stateFilter, setStateFilter] = React.useState({
    progress: false,
    ready: false,
    complete: false,
    error: false,
  });

  function setInProgressTrue() {
    setStateFilter({
      progress: true,
      ready: false,
      complete: false,
      error: false,
    });
  }
  function setInReadyTrue() {
    setStateFilter({
      progress: false,
      ready: true,
      complete: false,
      error: false,
    });
  }
  function setInCompleteTrue() {
    setStateFilter({
      progress: false,
      ready: false,
      complete: true,
      error: false,
    });
  }
  function setInErrorTrue() {
    setStateFilter({
      progress: false,
      ready: false,
      complete: false,
      error: true,
    });
  }

  return (
    <div className="flex flex-col">
      <div className="p-3 bg-slate-200 flex flex-row gap-4 items-center">
        <span className="Slabo font-semibold">Estado </span>

        <div className="p-3 flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            id="progress"
            name="progress"
            checked={stateFilter.progress}
            onChange={setInProgressTrue}
          ></input>

          <div className="flex flex-row gap-2 justify-center items-center">
            <FaCircle style={{ color: "orange" }} />
            <label htmlFor="progress" className="Slabo font-semibold">
              En Progreso
            </label>
          </div>
        </div>

        <div className="p-3 flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            id="ready"
            name="ready"
            checked={stateFilter.ready}
            onChange={setInReadyTrue}
          ></input>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaCircle style={{ color: "blue" }} />
            <label htmlFor="progress" className="Slabo font-semibold">
              Preparado
            </label>
          </div>
        </div>

        <div className="p-3 flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            id="complete"
            name="complete"
            checked={stateFilter.complete}
            onChange={setInCompleteTrue}
          ></input>
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaCircle style={{ color: "aqua" }} />
            <label htmlFor="complete" className="Slabo State-Design">
              Completado
            </label>
          </div>
        </div>

        <div className="p-3 flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            id="error"
            name="error"
            checked={stateFilter.error}
            onChange={setInErrorTrue}
          ></input>

          <div className="flex flex-row gap-2 justify-center items-center">
            <FaCircle style={{ color: "red" }} />
            <label htmlFor="error" className="Slabo State-Design">
              Error
            </label>
          </div>
        </div>
      </div>

    </div>
  );
}
