import React, {useState} from "react";
import axios from "axios";

import SearchForm from '../../components/SearchForm'

const User = () => {

    const [user, setUser] = useState("");
    const [repo, setRepo] = useState("");

    
    const getUser = async (incomingUsername) => {

        const userResult = await axios.request(`https://api.github.com/users/${incomingUsername}`)
        console.log('user: ', userResult)
        setUser(userResult)
    }

    const getRepo = async (incomingUsername) => {
        // setUser(banana)
      const repos = await axios.request(`https://api.github.com/users/${incomingUsername}/repos`)
      console.log('repo: ', repos)
      setRepo(repos)
    }



    return <>
    <h1>User</h1>
    <SearchForm getUser={getUser} getRepo={getRepo}/>
    <p>User: {user} Repo: {repo}</p>
    </>
}

export default User;
