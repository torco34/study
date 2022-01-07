import React from "react";
const initial = {
  title: "Desarrolladora",
  email: "torcoromaarias@gmail.co",
  nombre: "torcoroma",
  image: ".../img/descarga.jpeg",
  imag: {
    small: "",
    Medium: "",
    big: ".../img/descarga.jpeg",
  },
};
const Condition = () => {
  const [produc, setProduc] = React.useState(initial);

  const dateProduct = (nombre, value) => {
    setProduc({
      ...produc,
      [nombre]: value,
      nombre: "Sergio",
      email: "sergioebeltran@gmail.com",
    });
  };

  const atra = () => {
    setProduc({
      title: "desarrollador",
      nombre: "Torcoroma",
      email: "tocoromaarias@gmail.com",
    });
  };
  return (
    <>
      <div style={{ width: "50%", height: "50vh", background: "cadetblue" }}>
        <button className="btn btn-dark m-5" onClick={atra}>
          atras
        </button>
        <button
          className="btn btn-dark "
          onClick={() => dateProduct("title", "chef", "sergio")}
        >
          next
        </button>
        <h1>Soy el componente....</h1>
        <br />
        <h3>Profecion... {produc.title}</h3>
        <h3>Correo ..{produc.email}</h3>
        <h3>Nombre ...{produc.nombre}</h3>
        <img src={produc.imag?.big} alt="asd" />
      </div>
    </>
  );
};
export { Condition };
