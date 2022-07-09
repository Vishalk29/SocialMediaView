import React from 'react'
import FollowCard from '../Followers/FollowCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Profile.css'
const Profile = () => {
    return (
        <div className='profileSilde'>
            <LogoSearch />
            <ProfileCard />
            <FollowCard />

        </div>
    )
}

export default Profile