import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from '../components/Container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Container />
      </MuiThemeProvider>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
