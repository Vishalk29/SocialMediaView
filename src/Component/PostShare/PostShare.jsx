import React from 'react'
import ProfileImage from '../../img/img1.png'
import './PostShare.css'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
const PostShare = () => {
    return (
        <div className="postShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder='Whats happening' />
                <div className="postOptions">
                    <div className="option" style={{ color: "var(--photo" }}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--schedule" }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className='button ps-button'>
                        Share
                    </button>
                </div>
            </div>
        </div>

    )
}

export default PostShare