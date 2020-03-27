import React from 'react'
import Comment from './Comments'
import { Button, Icon, Label } from 'semantic-ui-react'

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
                    <h2>{username}'s post</h2>
                </div>
                <img 
                    className="post-image"
                    src={img_url} 
                    alt={username} 
                />
                <div className="post-container">
                    <Button as='div' labelPosition='right' onClick={this.handleLikeClick}>
                        <Button color='red'>
                            <Icon name='heart' />
                            Like
                        </Button>
                        <Label as='a' basic color='red' basic pointing='left'>
                            {likes}
                        </Label>
                    </Button>
                    <div>
                        <br></br>
                        <strong>Description: </strong> 
                        {description}
                    </div>
                    <br></br>
                    <div>
                        <h5>
                        Comments: 
                        </h5>
                        {commentsArrayComponent} 
                    </div>
                </div>
            </div>
        )
    }

}

export default Post