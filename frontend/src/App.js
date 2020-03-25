import React from 'react';  
import {Switch, Route, withRouter} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './containers/ProfileContainer.jsx'
import PostContainer from './containers/PostContainer'


class App extends React.Component {
  state = {
    user: {
      username: "",
      name: "",
      avatar: "",
    },
    token: "",
    posts: []
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }

    fetch("http://localhost:3000/posts")
      .then(r=> r.json())
      .then((postsArray) => {
        this.setState({
          posts: postsArray
        })
      })
  }

  handleResponse = (response) => {
    if (response.user) {
      localStorage.token = response.token
      this.setState(response, () => {
        this.props.history.push("/profile")
      })
    } else {
      alert(response.error)
    }
  }

  handleRegister = (userInfo) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  handleNewPost = (postInfo) => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postInfo)
    })
    .then(r => r.json())
    .then(results => {
      let newArray = [...this.state.posts, results]
      this.setState({
        post: newArray
      })
    })
  }

  handleLogin = (userInfo) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  renderRegisterForm = () => {
    return <RegisterForm handleSubmit={this.handleRegister}/>
  }

  renderLoginForm = () => {
    return <LoginForm handleSubmit={this.handleLogin}/>
  }

  renderProfile = () => {
    return <ProfileContainer user={this.state.user} token={this.state.token} posts={this.state.posts} handleNewPost={this.handleNewPost}/>
  }

  renderPost = () => {
    return <PostContainer posts={this.state.posts}/>
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderLoginForm } />
          <Route path="/register" render={ this.renderRegisterForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/posts" render={ this.renderPost } />
          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
