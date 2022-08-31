import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

export default function SearchForm({ getData }) {
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    getData(user);
  }

  function handleUser(e) {
    const input = e.target.value;
    setUser(input);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            autoFocus
            label="Search github user..."
            variant="standard"
            size="small"
            onChange={handleUser}
          />
          <IconButton type="submit">
            <SearchIcon style={{ fill: "black" }} />
          </IconButton>
        </Box>
        ;
      </form>
    </>
  );
}
