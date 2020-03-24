import React, { Component } from 'react';

class ProfileContainer extends Component {

  render() {
    console.log(this.props)
    let {username, name, avatar} = this.props.user

    return (
      <div>
        <h2>{username}'s Profile</h2>
        <img src={avatar} alt={name} />
      </div>
    );
  }
}

export default ProfileContainer;