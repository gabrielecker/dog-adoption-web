import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
          <AppBar title="Menu" showMenuIconButton={false} />
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
};
