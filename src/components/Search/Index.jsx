import React, { useState } from "react";
import Img1 from "../../img/img1.jpeg";
import Img2 from "../../img/img2.jpeg";
import Img3 from "../../img/img3.jpg";
import Img4 from "../../img/img4.jpeg";
import Img5 from "../../img/img5.png";
import Img6 from "../../img/img6.jpg";
import { Input } from "./Input";
import { Item } from "./Item";
import { List } from "./List";
const initial = [
  { img: Img1, title: "El sonido de la gitarra" },
  { img: Img2, title: "Disfruto cada sonido" },
  { img: Img3, title: "Reacuerda todo es pasajero" },
  { img: Img4, title: "Tha mucsi is very deutifud" },
  { img: Img5, title: "Un cafe una cancion es mejormil amigo" },
  { img: Img6, title: "En silencio es mi mejor aconsejero" },
];

const Search = (prosp) => {
  const [array, setArray] = useState(initial);
  const [search, setSearch] = useState("");
  // const index = array.filter((arra) => arra.title).length;
  let searchArray = [];

  if (!search.length >= 1) {
    searchArray = array;
    console.log(searchArray);
  } else {
    searchArray = array.filter((arra) => {
      const arraTitle = arra.title.toLowerCase();
      const searchTitle = search.toLowerCase();
      return arraTitle.includes(searchTitle);
    });
  }

  return (
    <>
      <div
        style={{
          // background: "bisque",
          displa: "flex",
          justifyContent: "space-around",
          width: "80%",
          height: "110vh",
          padding: "30px",
        }}
      >
        <Input search={search} setSearch={setSearch} />
        <List>
          {searchArray.map((init) => (
            <Item key={init.title} title={init.title} Img={init.img} />
          ))}
        </List>
      </div>
    </>
  );
};
export { Search };
