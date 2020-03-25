import React, { Component } from 'react';
import Post from './Post'

class PostContainer extends Component {

  render() {

    const postsArrayComponents = this.props.posts.map(post => {
      return <Post key={post.id} postObject={post} updateLikes={this.props.updateLikes}/>
    })

    return (
      <div>
          {postsArrayComponents}
      </div>
    );
  }
}

export default PostContainer;