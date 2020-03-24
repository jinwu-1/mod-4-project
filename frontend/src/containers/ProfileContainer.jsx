import React, { Component } from 'react';

class ProfileContainer extends Component {

  render() {
    let {username, name, avatar} = this.props.user

    return (
      <div>
        <h2>Profile</h2>
        <img src={avatar} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  }
}

export default ProfileContainer;