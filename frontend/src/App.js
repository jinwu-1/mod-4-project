import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './containers/ProfileContainer.jsx'
import PostContainer from './containers/PostContainer'


class App extends React.Component {
  state = {
    user: {
      username: "",
    },
    token: "",
    posts: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then(r=> r.json())
      .then((postsArray) => {
        this.setState({
          posts: postsArray
        })
      })
  }

  handleLogin = (userInfo) => {
    console.log(userInfo)
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then((returningUser) => {
      if (returningUser.id) {
        this.setState({
          user: returningUser
        }, () => {
          this.props.history.push("/profile")
        })
      } else {
        alert(returningUser.error)
      }
    })
  }

  handleRegister = (userInfo) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(r => r.json())
    .then((newUser) => {
      this.setState({
        user: newUser
      }, () => {
        this.props.history.push("/profile")
      })
    })
  }

  renderForm = (routerProps) => {
    return <h1>Not Working Yet</h1>
    // if(routerProps.location.pathname === "/login"){
    //   return <Form formName="Login Form" handleSubmit={this.handleLogin}/>
    // } else if (routerProps.location.pathname === "/register") {
    //   return <Form formName="Register Form" handleSubmit={this.handleRegister}/>
    // }
  }

  renderProfile = () => {
    return <ProfileContainer user={this.state.user}/>
  }

  renderPost = () => {
    return <PostContainer posts={this.state.posts}/>
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
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
