import React, { Component } from 'react';
import Post from './Post'
import NewPost from '../components/NewPost'

class ProfileContainer extends Component {


  render() {
    let {username, name, avatar} = this.props.user
  
    let filteredArray = this.props.posts.filter(post => {
      return post.user.username === this.props.user.username
    })

    let postComponentArray = filteredArray.map(post => {
      return <Post key={post.id} postObject={post} />
    })

    return (
      <div>
        <h2>{username}'s Profile</h2>
        <img 
          className="avatar"
          src={avatar} 
          alt={name} 
        />
        <NewPost 
          user={this.props.user}
          handleNewPost={this.props.handleNewPost}
        />
        {postComponentArray}
      </div>
    );
  }
}

export default ProfileContainer;