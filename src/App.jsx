import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />}></Route>
      <Route path="/:user" element={<Pages.Home />}></Route>
      <Route path="/:user/:repo" element={<Pages.Repo />}></Route>
      <Route path="*" element={<Pages.NothingFound />}></Route>
    </Routes>
  );
}

export default App;
