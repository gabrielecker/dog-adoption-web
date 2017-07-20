import React, { Component } from 'react';
import Header from '../app/common/Header';
import Footer from '../app/common/Footer';
import DogList from './DogList';
import { Grid } from 'react-flexbox-grid';
import DogStore from '../stores/DogStore';

export default class Container extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid fluid>
          <DogList store={DogStore}/>
        </Grid>
        <Footer />
      </div>
    );
  }
};
