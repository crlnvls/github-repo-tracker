import React, { useState } from "react";

import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

import "./style.css";

export default function SearchForm({ getUser, getRepo }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    getUser(input);
    getRepo(input);
  }

  function handleUser(e) {
    const formInput = e.target.value;
    setInput(formInput);
  }

  return (
    <>
      <h3 className="heading">Search by username</h3>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          className="input"
          placeholder="Search..."
          onChange={handleUser}
        />
        <IconButton type="submit">
          <SearchIcon className="search" fontSize="large" />
        </IconButton>
      </form>
    </>
  );
}
