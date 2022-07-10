import React from 'react'
import './Post.css'
import { PostData } from '../Data/PostData'
import { Posts } from '../Posts/Posts'
const Post = () => {
    return (
        <div className='post'>
            {PostData.map((postData, id) => {
                return <Posts data={postData} id={id} />
            })}
        </div>
    )
}

export default Post