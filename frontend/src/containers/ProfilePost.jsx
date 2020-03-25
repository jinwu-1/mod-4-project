import React from 'react'
import Comment from './Comments'

class ProfilePost extends React.Component {

    handleDelete = () => {
        this.props.handleDeletePost(this.props.postObject.id)
    }

    render() {

        let {img_url, description, likes} = this.props.postObject
        let {username} = this.props.postObject.user
        let commentsArrayComponent = this.props.postObject.comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />
        })

        return (
            <div className="card">
                <h3>{username}'s Post</h3>
                <img 
                    className="postImage"
                    src={img_url} 
                    alt={username} 
                />
                <p>Likes: {likes}</p>
                <p>Description: {description}</p>
                <p>Comments: {commentsArrayComponent} </p>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }

}

export default ProfilePost