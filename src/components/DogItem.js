import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class DogItem extends Component {
  render() {
    return (
      <Link to={`/dog/${this.props.dog.id}`}>
        <GridTile
          key={this.props.dog.id}
          title={this.props.dog.name}
          subtitle={<span>{this.props.dog.location}</span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
            <img src={this.props.dog.photo} />
        </GridTile>
      </Link>
    );
  }
}
