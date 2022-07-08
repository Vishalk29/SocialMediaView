import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
const ProfileCard = () => {
    return (
        <div className="profileCard">
            <div className="profileImage">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="profileName">
                <span> Vishal kulkarni</span>
                <span>Software Engineer </span>
            </div>
        </div>
    )
}

export default ProfileCard