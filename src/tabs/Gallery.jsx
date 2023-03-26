import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {

  state = {
    search: "",
    page: 1,
    photos: [],
    showBtn: false,
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search || this.state.page !== prevState.page) {
      ImageService.getImages(this.state.search, this.state.page).then(data => {
        console.log(data);
        this.setState((prevState) => ({
          photos: [...prevState.photos, ...data.photos],
          showBtn: this.state.page < Math.ceil(data.total_results / 15)
        }))
      })
    }
  }

  handleFormSubmit = (data) => {
    this.setState({ search: data, photos: [], page: 1 });
  };
  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1
    }))
  }
  render() {
    const { photos, showBtn } = this.state;
    return (
      <>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <Grid>
          {photos.map(photo => {
            return <GridItem key={photo.id}>
              <CardItem color={photo.avg_color}>
                <img src={photo.src.large} alt={photo.alt} />
              </CardItem>
            </GridItem>
          })}
          {showBtn && <Button onClick={this.handleLoadMore}>Load more</Button>}

        </Grid>
      </>
    );
  }
}
