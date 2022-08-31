import React from "react";
import { Routes, Route } from "react-router-dom";

import * as Pages from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    (<Navbar />),
    (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Pages.Home />
            </>
          }
        ></Route>
        <Route
          path="user/:user"
          element={
            <>
              <Navbar />
              <Pages.User />
            </>
          }
        ></Route>
        <Route
          path="user/:user/:repo"
          element={
            <>
              <Navbar />
              <Pages.Repo />
            </>
          }
        ></Route>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Pages.NothingFound />
            </>
          }
        ></Route>
      </Routes>
    )
  );
}

export default App;
