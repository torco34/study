import React, { useEffect } from "react";

const Pantalla = () => {
  const [color, setColor] = React.useState("#D98880 ");
  useEffect(() => {
    function onMauseMove(evento) {
      if (evento.clientX < window.innerWidth / 2) {
        setColor(" #D98880 ");
      } else {
        setColor("#6E2C00");
      }
    }
    console.log("EJECUTANDO");

    window.addEventListener("mousemove", onMauseMove);
    return () => {
      console.log("LIMPIAR");
      window.removeEventListener("mousemove", onMauseMove);
    };
  }, []);
  return (
    <>
      <div
        className=" text-light "
        style={{ height: "100vh", background: color }}
      >
        <h4>Usando useEffect y el evento onMauseMove </h4>
        <p style={{ height: "auto", width: "40%" }}>
          La mitad de la ppantalla combia, cuando se pasa el maus por esima este
          efecto es logrado con user effect. Tambien estoy trayendo un
          componente con useState por esta razon cuando oprimimos el boto abrimo
          un comonente
        </p>
      </div>
    </>
  );
};
export { Pantalla };
