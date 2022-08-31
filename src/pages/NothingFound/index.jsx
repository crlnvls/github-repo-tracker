import React from "react";

import {Link} from 'react-router-dom';
import './style.css'

const NothingFound = () => {
    return <>
    <div className="not-found">
        <h1>404</h1>
        <h3>Nothing found</h3><br></br>
        <p>Try to <Link to='user'>find another user</Link></p>
    </div>
    </>
}

export default NothingFound;
