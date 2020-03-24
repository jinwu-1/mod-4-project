import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
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
    fetch("http://localhost:3000/posts")
      .then(r=> r.json())
      .then((postsArray) => {
        this.setState({
          posts: postsArray
        })
      })
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
    .then(results => {
      this.setState({
        user: results.user,
        token: results.token
      })
    })
  }

  renderRegisterForm = () => {
    return <RegisterForm handleSubmit={this.handleRegister}/>
  }

  renderProfile = () => {
    return <ProfileContainer user={this.state.user} token={this.state.token}/>
  }

  renderPost = () => {
    return <PostContainer posts={this.state.posts}/>
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
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
