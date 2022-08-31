import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />}>
        <Route path="/:repos" element={<Pages.Repo />}></Route>
      </Route>
      <Route path="*" element={<Pages.NothingFound />}></Route>
    </Routes>
  );
}

export default App;
