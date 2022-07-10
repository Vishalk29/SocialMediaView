import React from 'react'
import './Posts.css'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import hearts from '../../img/like.png'
import notLike from '../../img/notlike.png'
export const Posts = ({ data }) => {
    return (
        <div className="posts">
            <img src={data.img} alt="" />

            <div className="postReact">
                <img src={data.liked ? hearts : notLike} alt="" />
                <img src={comment} alt="" />
                <img src={share} alt="" />
            </div>
            <span style={{ color: "var(--gray)", fontSize: "12px" }}> {data.likes} Likes</span>

            <div className="details">
                <span> <b>{data.name}</b></span>
                <span>  {data.disc}</span>
            </div>

        </div>
    )
}
