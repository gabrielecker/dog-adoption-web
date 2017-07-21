import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import DogList from '../../components/DogList';
import DogForm from '../../components/DogForm';
import Dog from '../../components/Dog';
import DogStore from '../../stores/DogStore';

export default class Container extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Grid fluid>
            <Switch>
              <Route exact path='/' render={(props) => (
                <DogList {...props} store={DogStore} />
              )} />
              <Route path='/dog/:id' render={(props) => (
                <Dog {...props} store={DogStore} />
              )} />
              <Route path='/form' component={DogForm} />
            </Switch>
          </Grid>
          <Footer />
        </div>
      </Router>
    );
  }
};
