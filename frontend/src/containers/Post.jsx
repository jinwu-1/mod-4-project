import React from 'react'
import Comment from './Comments'

class Post extends React.Component {

    handleLikeClick = () => {
        this.props.updateLikes(this.props.postObject.id, 1)
    }

    render() {
        let {img_url, description, likes} = this.props.postObject
        let {username} = this.props.postObject.user
        let commentsArrayComponent = this.props.postObject.comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />
        })
        return (
            <div className="post-card">
                <div className="post-header">
                    <h3>{username}'s Post</h3>
                </div>
                <img 
                    className="post-image"
                    src={img_url} 
                    alt={username} 
                />
                <div className="post-container">
                    <p onClick={this.handleLikeClick}>Likes: {likes}</p>
                    <p>Description: {description}</p>
                    <p>Comments: {commentsArrayComponent} </p>
                </div>
            </div>
        )
    }

}

export default Post