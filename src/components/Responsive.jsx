import React, { useEffect } from "react";

const Responsive = () => {
  const [widthWindow, setWindow] = React.useState(window.innerWidth);
  const [color, setColor] = React.useState("crimson");
  const small = widthWindow > 700;
  const smalli = widthWindow < 700;

  useEffect(() => {
    const handleResize = () => setWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <h1>{widthWindow}</h1>
      {small && (
        <div
          style={{ width: "400px", height: "500px", background: color }}
        ></div>
      )}
      {smalli && (
        <div
          style={{
            width: "700px",
            height: "550px ",
            background: "cornflowerblue",
          }}
        ></div>
      )}
    </>
  );
};

export { Responsive };
