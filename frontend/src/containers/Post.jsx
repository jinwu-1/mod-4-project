import React from 'react'
import Comment from './Comments'

const Post = (props) => {

    let {img_url, description} = props.postObject
    let {username} = props.postObject.user
    let commentsArrayComponent = props.postObject.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />
    })
    return (
        <div>
            <h3>{username}'s Post</h3>
            <img 
                className="postImage"
                src={img_url} 
                alt={username} 
            />
            <p>Description: {description}</p>
            <p>Comments: {commentsArrayComponent} </p>
        </div>
    )
}

export default Post