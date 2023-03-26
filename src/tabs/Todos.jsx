import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
    const localItems = JSON.parse(localStorage.getItem('items'));
    if(localItems) {
      this.setState({items:localItems})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.items.length !== prevState.items) {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    }
  }

  onSubmit = (text) => {
    console.log(text);
    const todo = { text, id: nanoid(4) }
    console.log(todo);
    this.setState(prev => ({ items: [todo, ...prev.items] }))
  }

  onDelete = (id) => {
    this.setState(prev => ({
      items: prev.items.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <>
      <SearchForm onSubmit={this.onSubmit} />
      <Grid>
          {this.state.items.map((item, index) => {
            return <GridItem key={item.id}>
                <Todo id={item.id} text={item.text} counter={index+1} onDelete={this.onDelete}/> 
            </GridItem>
          })}


        </Grid>
      </>  
    )
    
  }
}