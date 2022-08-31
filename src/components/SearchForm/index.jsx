import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import './style.css'

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
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            autoFocus
            label="Search..."
            variant="standard"
            size="small"
            onChange={handleUser}
          />
          <IconButton type="submit">
            <SearchIcon style={{ fill: "black" }} />
          </IconButton>
        </Box>
      </form>
    </>
  );
}
