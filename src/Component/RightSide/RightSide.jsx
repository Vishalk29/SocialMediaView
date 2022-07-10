import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import Trends from '../Trends/Trends'
const RightSide = () => {
    return (
        <div className="RightSide">
            <div className="navItems">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={noti} alt="" />
                <img src={comment} alt="" />
            </div>
            <Trends />
            <button className='button r-button'>
                Share
            </button>
        </div>
    )
}
export default RightSide