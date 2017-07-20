import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import DogItem from './DogItem';
import CircularProgress from 'material-ui/CircularProgress';
import Subheader from 'material-ui/Subheader';
import AutoComplete from 'material-ui/AutoComplete';
import { GridList } from 'material-ui/GridList';
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
  },
  list: {
    marginTop: '50px'
  }
};

@observer
export default class DogList extends Component {
  componentDidMount() {
    this.props.store.fetchDogs();
  }

  handleUpdateInput = (value) => {
    this.props.store.filter = value;
  }

  render() {
    const { dogs, fetched, filteredNames } = this.props.store;
    if(!fetched) return <CircularProgress style={styles.center} />;

    return (
      <Col lgOffset={3} mdOffset={2} smOffset={1} xs={12} sm={10} md={8} lg={6} style={styles.root}>
        <AutoComplete
          hintText="Buscar"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={filteredNames}
          maxSearchResults={4}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
        />
        <GridList cellHeight={180} cols={3} style={styles.list}>
          <Subheader>Dogs</Subheader>
          {dogs.map(dog => {
            return <DogItem dog={dog} key={dog.id} />;
          })}
        </GridList>
      </Col>
    );
  }
}
