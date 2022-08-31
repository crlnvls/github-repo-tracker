import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    return <>
    <div className="card" style={{width: '18rem'}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <div className="card-title">{data.name}</div>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={data.clone_url} target='blank' className="btn btn-primary">{data.clone_url}</a>
  </div>
</div>
    </>
}

export default Card;
