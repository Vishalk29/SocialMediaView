import React from 'react'
import Profileleft from '../../Component/ProfileLeft/Profileleft'
import ProfileCard from '../../Component/ProfileCard/ProfileCard'
import './ProfileDetail.css'
import PostSide from '../../Component/PostSide/PostSide'
const ProfileDeatil = () => {
    return (
        <div className="ProfileDetail">
            <Profileleft />
            <div className="profilecenter">
                <ProfileCard />
                <PostSide />
            </div>

        </div>
    )
}

export default ProfileDeatil