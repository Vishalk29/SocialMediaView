import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
export const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="infohead">
                <h4>Your info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' />
                </div>
            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>Single</span>
            </div>

            <div className="info">
                <span>
                    <b>Live in </b>
                </span>
                <span> India</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Vk international</span>
            </div>
            <button className="button logout-button">
                LogOut
            </button>
        </div>
    )
}
