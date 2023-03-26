import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    items: [],
  }

  onSubmit = (text) => {
    console.log(text);
    const todo = { text, id: nanoid(4) }
    console.log(todo);
    this.setState(prev => ({ items: [todo, ...prev.items] }))
  }
  render() {
    return (
      <SearchForm onSubmit={this.onSubmit} />
    )
  }
}