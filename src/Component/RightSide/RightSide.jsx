import React, { useState } from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import Trends from '../Trends/Trends'
import ShareModal from '../ShareModal/ShareModal'
const RightSide = () => {

    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className="RightSide">
            <div className="navItems">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={noti} alt="" />
                <img src={comment} alt="" />
            </div>
            <Trends />
            <button className='button r-button' onClick={() => setModalOpened(true)}>
                Share
            </button>
            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
    )
}
export default RightSide