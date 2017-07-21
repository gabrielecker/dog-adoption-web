import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpened: false
    }
  }

  componentWillMount() {
    injectTapEventPlugin();
  }

  toggleDrawer() {
    this.setState(Object.assign({}, this.state, {
      drawerOpened: !this.state.drawerOpened
    }))
  }

  render() {
    return (
      <div>
        <AppBar
          title="Dog Adoption"
          titleStyle={{textAlign: 'center'}}
          onLeftIconButtonTouchTap={() => this.toggleDrawer()}
        />
        <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this.toggleDrawer()}>
          <AppBar title="Opções" showMenuIconButton={false} />
          <List>
            <Link to='/' onClick={() => this.toggleDrawer()}><ListItem>Lista de cães</ListItem></Link>
            <Link to='/form' onClick={() => this.toggleDrawer()}><ListItem>Cadastrar cão</ListItem></Link>
          </List>
        </Drawer>
      </div>
    );
  }
};
