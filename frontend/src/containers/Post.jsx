import React from 'react'

const Post = (props) => {

    let {img_url, description} = props.postObject
    let {username, avatar} = props.postObject.user
    
    return (
        <div>
            <h3>{username}'s Post</h3>
            <img src={img_url} alt="post_image" />
            <p>Description: {description}</p>
        </div>
    )
}

export default Post