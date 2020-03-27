import React from 'react'
import Comment from './Comments'
import { Button, Icon, Label } from 'semantic-ui-react'

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
            <div>
                <div className="post-card">
                    <img 
                        className="post-image"
                        src={img_url} 
                        alt={username} 
                    />
                    <div className="post-container">
                        <Button as='div' labelPosition='right'>
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
                        <br></br>
                        <Button
                            onClick={this.handleDelete}
                            color='red'
                            content='Remove'
                            icon='x'
                            labelPosition='left'
                        />
                    </div>
                </div>
                <br></br>
            </div>
        )
    }

}

export default ProfilePost