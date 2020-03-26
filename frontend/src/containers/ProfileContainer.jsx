import React, { Component } from 'react';
import ProfilePost from './ProfilePost'
import NewPost from '../components/NewPost'

class ProfileContainer extends Component {


  render() {
    
    let {username, name, avatar} = this.props.user
  
    let filteredArray = this.props.posts.filter(post => {
      return post.user.username === this.props.user.username
    })

    let postComponentArray = filteredArray.map(post => {
      return <ProfilePost key={post.id} postObject={post} handleDeletePost={this.props.handleDeletePost}/>
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
          className="new-post-form"
          user={this.props.user}
          handleNewPost={this.props.handleNewPost}
        />
        <br></br>
          {postComponentArray}
      </div>
    );
  }
}

export default ProfileContainer;