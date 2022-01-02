import React from "react";
import { Pantalla } from "./Pantalla";
import { FetchCard } from "../FetchCard";
function Homee() {
  const [usebook, setcolor] = React.useState(false);
  const [componen, setComponen] = React.useState(false);
  const mostrarComp = () => {
    if (usebook === false) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  const apiCompon = () => {
    if (componen === false) {
      setComponen(true);
    } else {
      setComponen(false);
    }
  };
  return (
    <>
      <div className="m-3">
        <button className="btn btn-dark m-3" onClick={mostrarComp}>
          colorPantalla
        </button>
        <button onClick={apiCompon} className="btn btn-danger text-light">
          API
        </button>

        {usebook ? <Pantalla /> : ""}
        {componen ? <FetchCard /> : ""}
      </div>
    </>
  );
}

export { Homee };
