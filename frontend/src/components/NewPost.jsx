import React, { Component } from 'react';

class NewPost extends Component {
  state = {
    img_url: "",
    description: "",
    user_id: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewPost(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value,
      user_id: this.props.user.id
    })
  }

  render() {
    let {img_url, description} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>New Post</h1>
        <label htmlFor="img_url">img_url:</label>
        <input type="text" autoComplete="off" name="img_url" value={img_url} onChange={this.handleChange}/>
        <label htmlFor="description">description:</label>
        <input type="text" autoComplete="off" name="description" value={description} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default NewPost;