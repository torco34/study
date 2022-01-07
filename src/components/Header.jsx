import React from "react";
import { GrupoList } from "../styledCompo/Header";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <GrupoList>
        <ul>
          <Link to="/">
            <p className="active">useEffect</p>
          </Link>
          <Link to="/usestate">
            <p>UseStata</p>
          </Link>
          <Link to="/Reissues">
            <p>Reissues</p>
          </Link>
          <Link to="/Interviews">
            <p>Interviews</p>
          </Link>
          <Link to="/Podcast">
            <p>Podcast</p>
          </Link>
          <Link to="/Contact">
            <p>Contact</p>
          </Link>
        </ul>
      </GrupoList>
    </>
  );
};
export { Header };
