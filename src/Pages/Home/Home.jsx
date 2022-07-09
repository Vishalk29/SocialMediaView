import React from "react";
import PostSide from "../../Component/PostSide/PostSide";
import Profile from "../../Component/Profile/Profile";


import './Home.css';
const Home = () => {
    return (
        <div className="Home">
            <Profile />
            <PostSide />
            <div className="rightSide">right</div>

        </div>
    )
}
export default Home