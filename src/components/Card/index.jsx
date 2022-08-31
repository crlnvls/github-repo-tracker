import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      <div className="card" style={{ width: "40rem" }}>
        <div className="card-body">
          <div class="d-flex flex-row mb-2">
            <a href={data.clone_url} target="blank">
              {data.name}
            </a>
            <p className="mx-4  btn btn-outline-dark">{data["visibility"]}</p>
          </div>
          <p className="card-text">{data["description"]}</p>
        </div>
        <div class="d-flex flex-row mb-3">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
        </div>
      </div>
    </>
  );
};

export default Card;
