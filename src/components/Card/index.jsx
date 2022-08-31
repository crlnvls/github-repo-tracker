import React from "react";

import moment from "moment";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import ForkLeftOutlinedIcon from "@mui/icons-material/ForkLeftOutlined";
import "./style.css";

const Card = ({ data }) => {
  return (
    <>
      <div className="card" style={{ width: "50rem" }}>
        <div className="card-body">
          <div className=" d-flex flex-row mb-2">
            <a className="name" href={data.clone_url} target="blank">
              {data.name}
            </a>
            <p className="mx-4 btn btn-outline-light rounded-pill btn-sm">
              {data["visibility"]}
            </p>
          </div>
          <p className="card-text">{data["description"]}</p>
        </div>
        <div className="d-flex flex-row mb-2 px-3">
          <div className="p-2 mx-2">{data["language"]}</div>

          <a href={data.stargazers_url} className="p-2" mx-2>
            <StarBorderIcon fontSize="small" className="mx-1" />
            {data.stargazers_count}
          </a>

          <a href={data.forks_url} className="p-2 mx-2">
            <AltRouteOutlinedIcon fontSize="small" className="mx-1" />
            {data.forks_count}
          </a>
          <a href={data.issues_url} className="p-2 mx-2">
            <AdjustOutlinedIcon fontSize="small" className="mx-1" />
            {data.open_issues_count}
          </a>
          <a href={data.pulls_url} className="p-2 mx-2">
            <ForkLeftOutlinedIcon fontSize="small" className="mx-1" />
            {data.watchers_count}
          </a>
          <p className="p-2 mx-2">{moment(data.updated_at).fromNow()}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
