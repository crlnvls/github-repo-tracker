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
      <SearchForm getUser={getUser} getRepo={getRepo} />
      <div className="result" style={{ display: !user ? "none" : "flex" }}>
        <div className="user-info">
          <img src={user && user.data["avatar_url"]} alt="image" />
          <div className="name-container">
            <div className="name-wrapper">
              <h2>{user && user.data.name}</h2>
            </div>
          </div>
        </div>
        <div className="card-container">
          {repos &&
            repos.data.map((repo) => <Card key={repo.id} data={repo} />)}
        </div>
      </div>
    </>
  );
};

export default User;
