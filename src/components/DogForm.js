import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const textFieldStyle = {
  display: 'block',
  width: '100%'
};

export default class DogForm extends Component {
  sendForm(event) {
    event.preventDefault();
    let data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.sendForm(event)}>
          <TextField id="email" floatingLabelText="Email" style={textFieldStyle} type="email" />
          <TextField id="password" floatingLabelText="Password" style={textFieldStyle} type="password" />
          <RaisedButton type="submit" fullWidth={true} label="Login" />
        </form>
      </div>
    );
  }
}
