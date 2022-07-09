import React from 'react'
import { Followers } from '../Data/DataFollower'
import './FollowCard.css'
const FollowCard = () => {
    return (
        <div className="followCard">

            <h3>Who is following you</h3>
            {
                Followers.map((follower, id) => {
                    return (
                        <div className="follower">
                            <div>
                                <img src={follower.img} alt="" className='followerImage' />
                                <div className="name">
                                    <span>{follower.name}</span>
                                    <span>@{follower.username}</span>
                                </div>
                            </div>
                            <button className='button fc-button'>
                                follow
                            </button>

                        </div>
                    )

                })}
        </div>
    )
}

export default FollowCard