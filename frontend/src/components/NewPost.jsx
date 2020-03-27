import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

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
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            type="text" 
            autoComplete="off" 
            name="img_url" value={img_url} 
            onChange={this.handleChange}
            label="Image URL"
          />
          <Form.Input 
            type="text" 
            autoComplete="off" 
            name="description" 
            value={description} 
            onChange={this.handleChange}
            label="Description"
          />
          <Button
            color='teal'
            content='New Post'
            icon='add'
            labelPosition='left'
          />
        </Form>
      </div>
    );
  }
}
export default NewPost;