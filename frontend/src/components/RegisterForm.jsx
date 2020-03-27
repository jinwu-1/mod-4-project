import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    avatar: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
   
    let {username, password, avatar, name} = this.state

    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
            <Form.Input 
              type="text" 
              autoComplete="off" 
              name="username" value={username} 
              onChange={this.handleChange}
              label="Username"
            />
            <Form.Input 
              type="password" 
              autoComplete="off" 
              name="password" value={password} 
              onChange={this.handleChange}
              label="Password"
            />
            <Form.Input 
              type="text" 
              autoComplete="off" 
              name="name" value={name} 
              onChange={this.handleChange}
              label="Name"
            />
            <Form.Input 
              type="text" 
              autoComplete="off" 
              name="avatar" value={avatar} 
              onChange={this.handleChange}
              label="Avatar URL"
            />
            <Button
              color='teal'
              content='Register'
              icon='add'
              labelPosition='left'
              type="submit"
              value="Submit"
            />
        </Form>
      </div>
    );
  }
}
export default RegisterForm;