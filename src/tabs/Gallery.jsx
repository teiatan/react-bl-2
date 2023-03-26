import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {

  state = {
    search: "",
    page: 1,
    
  }

  handleFormSubmit = (data) => {
    this.setState({search: data});
  };

  render() {
    return (
      <>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <SearchForm onSubmit={this.handleFormSubmit}/>
      </>
    );
  }
}
