import React from "react";

import {Link} from 'react-router-dom' 
import './style.css'

const Home = () => {
    return <>
    <div className="hero">
        <h1>Welcome to GitHub API!</h1>
        <h3>Easy access to millions of GitHub repositories.</h3><br></br>
        <p>Let's get started by <Link to='user'>searching users</Link></p>
    </div>
    </>
}

export default Home;
