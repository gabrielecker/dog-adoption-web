import { computed, observable } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

class DogStore {
  @observable dogs = [];
  @observable fetched = false;
  @observable error = null;
  @observable filter = '';

  @computed get filteredNames() {
    let matches = new RegExp(this.filter, 'i');
    if(!this.filter) return Array();
    return _.filter(_.map(this.dogs, 'name'), (name) => {
      return matches.test(name);
    });
  }

  getDog(id) {
    return _.find(this.dogs, ['id', Number(id)]);
  }

  fetchDogs() {
    axios.get('http://dog-adoption.herokuapp.com/dogs/')
      .then(response => {
        this.fetched = true;
        this.dogs = response.data.items;
      })
      .catch(err => {
        this.fetched = false;
        this.error = err;
      });
  }
}

export default new DogStore;
