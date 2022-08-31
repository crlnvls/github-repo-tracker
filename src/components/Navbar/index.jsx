import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <>
      <nav className="navbar  navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <GitHubIcon style={{ fill: "white" }} fontSize="large" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item m-8">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="/user">
                  User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
