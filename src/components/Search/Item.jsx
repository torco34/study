import React from "react";

const Item = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          background: "dimgrey",
          marginTop: "20px",
          width: "50%",
          border: "solid",
          color: "chocolate",
          borderRadius: "5px",
        }}
      >
        <img src={props.Img} style={{ width: "50%", height: "150px" }} />

        <h1
          style={{
            // position: "absolute",
            fontSize: "20px",
            margin: "25px 50px",
            color: "bisque",
          }}
        >
          {props.title}
        </h1>
        <button
          style={{
            fontSize: "20px",
            height: "30px",
            marginLeft: "40px ",
            color: "red",
            backgroundColor: "paleturquoise",
          }}
        >
          X
        </button>
      </div>
    </>
  );
};
export { Item };
