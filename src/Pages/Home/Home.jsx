import React from "react";
import Profile from "../../Component/Profile/Profile";


import './Home.css';
const Home = () => {
    return (
        <div className="Home">
            <Profile />
            <div className="postSide">post</div>
            <div className="rightSide">right</div>

        </div>
    )
}
export default Home