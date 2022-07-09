import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/img1.png'
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

            <div className="followStatus">
                <hr />

                <div>
                    <div className="follow">
                        <span>2000</span>
                        <span>Following</span>
                    </div>

                    <div className="vertical-line"></div>

                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>

                </div>

                <hr />
            </div>
            <span>
                My Profile
            </span>
        </div>
    )
}

export default ProfileCard