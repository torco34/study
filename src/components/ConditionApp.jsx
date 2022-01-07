import React from "react";
import { BodyPege } from "../styledCompo/ConditionApp";
import { Condition } from "./useState/Condition";
import { Search } from "./Search//Index";
import { Shopping } from "./useState/Shopping";
const ConditionApp = () => {
  const [render, setRender] = React.useState(false);
  const [render2, setRender2] = React.useState(false);
  const [render3, setRender3] = React.useState(false);
  return (
    <>
      <BodyPege>
        <h1>Cada boton me traen un componente</h1>
        <button
          className="btn btn-info text-light m-5"
          onClick={() => setRender(!render)}
        >
          firstApp
        </button>

        <button
          className="btn btn-info text-light m-5"
          onClick={() => setRender2(!render2)}
        >
          {" "}
          twoApp
        </button>

        <button
          className="btn btn-info text-light "
          onClick={() => setRender3(!render3)}
        >
          threeApp
        </button>
        {render && <Condition />}
        {render2 && <Shopping />}
        {render3 && <Search />}
      </BodyPege>
    </>
  );
};
export { ConditionApp };
