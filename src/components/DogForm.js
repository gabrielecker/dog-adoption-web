import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  preview: {
    height: 150,
    width: 150,
    border: '1px dashed gray',
    marginTop: 10
  },
  photo: {
    height: '100%',
    width: '100%'
  }
}

export default class DogForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      breed: null,
      description: '',
      location: '',
      size: null,
      photo: null,
      preview: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSelectBreed = (event, index, value) => {
    this.setState({
      breed: value
    });
  }

  handleSelectSize = (event, index, value) => {
    this.setState({
      size: value
    });
  }

  handleImageChange(event) {
    event.preventDefault();
    let reader = new FileReader();
    let photo = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        photo: photo,
        preview: reader.result
      });
    };

    reader.readAsDataURL(photo);
  }

  handleSubmit(event) {
    event.preventDefault();
    // TODO: Send data to API
  }

  render() {
    let preview = (
      <div style={styles.preview}>
        <img src={this.state.preview} style={styles.photo}/>
      </div>
    );
    return (
      <Col lgOffset={3} mdOffset={2} smOffset={1} xs={12} sm={10} md={8} lg={6}>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <TextField
            name="name"
            floatingLabelText="Nome"
            fullWidth={true}
            hintText=""
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <SelectField
            id="breed"
            floatingLabelText="Raça"
            floatingLabelFixed={true}
            fullWidth={true}
            hintText="Caso não encontre ou não saiba, coloque como 'Outra'"
            value={this.state.breed}
            onChange={this.handleSelectBreed}
          >
            <MenuItem value={1} primaryText="Adicionar Raças pela API" />
            <MenuItem value={2} primaryText="Outra" />
          </SelectField>
          <TextField
            name="description"
            floatingLabelText="Descrição"
            fullWidth={true}
            multiLine={true}
            hintText="Escreva uma breve descrição sobre o cão :D"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <TextField
            name="location"
            floatingLabelText="Localização"
            fullWidth={true}
            hintText="Coloque a localização para os interessados"
            value={this.state.location}
            onChange={this.handleInputChange}
          />
          <SelectField
            name="size"
            floatingLabelText="Tamanho"
            fullWidth={true}
            hintText=""
            value={this.state.size}
            onChange={this.handleSelectSize}
          >
            <MenuItem value="P" primaryText="Pequeno" />
            <MenuItem value="M" primaryText="Médio" />
            <MenuItem value="G" primaryText="Grande" />
          </SelectField>
          <RaisedButton containerElement='label' label='Foto'>
             <input type="file" style={{display: 'none'}} onChange={this.handleImageChange}/>
          </RaisedButton>
          {preview}
          <RaisedButton
            type="submit"
            fullWidth={true}
            label="Cadastrar"
            style={{marginTop: 10}}
          />
        </form>
      </Col>
    );
  }
}
