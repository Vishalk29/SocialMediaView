import React from "react";
import PostSide from "../../Component/PostSide/PostSide";
import Profile from "../../Component/Profile/Profile";
import RightSide from "../../Component/RightSide/RightSide";


import './Home.css';
const Home = () => {
    return (
        <div className="Home">
            <Profile />
            <PostSide />
            <RightSide />

        </div>
    )
}
export default Home