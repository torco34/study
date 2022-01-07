import React from "react";
// import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./peges/Home";
// import { Reviews } from "./peges/ Reviews";
import { Usestate } from "./peges/Usestate";
// import { Reissues } from "./peges/Reissues";
// import { Interviews } from "./peges/Interviews";
// import { Podcast } from "./peges/Podcast";
// import { Contact } from "./peges/Contact";
// import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/usestate" element={<Usestate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
