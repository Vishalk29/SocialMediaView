import React, { useState, useRef } from 'react'
import ProfileImage from '../../img/img1.png'
import './PostShare.css'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                images: URL.createObjectURL(img)
            })
        }
    }


    return (
        <div className="postShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder='Whats happening' />
                <div className="postOptions">
                    <div className="option" style={{ color: "var(--photo" }} onClick={() => imageRef.current.click()}>
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
                    <div style={{ display: "none" }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className="prevImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image.images} alt="" />
                    </div>
                )}
            </div>
        </div>

    )
}

export default PostShare