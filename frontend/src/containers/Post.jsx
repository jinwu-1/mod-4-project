import React from 'react'
import Comment from './Comments'

const Post = (props) => {

    let {img_url, description} = props.postObject
    let {username, avatar} = props.postObject.user
    let commentsArrayComponent = props.postObject.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />
    })
    return (
        <div>
            <h3>{username}'s Post</h3>
            <img src={img_url} alt="post_image" />
            <p>Description: {description}</p>
            <p>Comments: {commentsArrayComponent} </p>
        </div>
    )
}

export default Post