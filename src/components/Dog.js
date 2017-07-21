import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { observer } from 'mobx-react';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  center: {
    margin: '50px auto',
    display: 'block'
  }
};

@observer
export default class Dog extends Component {
  constructor() {
    super();
    this.state = {
      dog: null
    }
  }

  componentDidMount() {
    this.setState({
      dog: this.props.store.getDog(this.props.match.params.id)
    });
  }

  render() {
    if(!this.state.dog) return <CircularProgress />;
    return (
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
        />
        <CardMedia
          overlay={<CardTitle title={this.state.dog.name} subtitle={this.state.dog.location} />}
        >
          <img src={this.state.dog.photo} alt="" />
        </CardMedia>
        <CardTitle title={this.state.dog.size} subtitle={this.state.dog.breed.name} />
        <CardText>{this.state.dog.description}</CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}
