import React, { useState } from "react";
import axios from "axios";

import "./style.css";

import SearchForm from "../../components/SearchForm";
import Card from "../../components/Card";

const User = () => {
  const [user, setUser] = useState("");
  const [repos, setRepo] = useState("");

  const getUser = async (incomingUsername) => {
    const userResult = await axios.request(
      `https://api.github.com/users/${incomingUsername}`
    );
    console.log("user: ", userResult.data);
    setUser(userResult);
  };

  const getRepo = async (incomingUsername) => {
    const reposResult = await axios.request(
      `https://api.github.com/users/${incomingUsername}/repos`
    );
    console.log("repo: ", reposResult);
    setRepo(reposResult);
  };

  return (
    <>
      <h1>User</h1>
      <SearchForm getUser={getUser} getRepo={getRepo} />
      <div className="result" style={{ display: !user ? "none" : "flex" }}>
        <img src={user && user.data["avatar_url"]} alt="image" />
        <p>Name: {user && user.data.name}</p>
        {repos && repos.data.map((repo) => <Card key={repo.id} data={repo} />)}
      </div>
    </>
  );
};

export default User;
