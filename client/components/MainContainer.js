import React, { Component } from 'react';
import ToDos from './ToDos'
import Header from './Header'

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        "Notebook",
        "Jello",
        "Spinach",
        "Rice",
        "Birthday Cake",
        "Candles"
      ],
      todoItem: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({todoItem: e.target.value})
    
    console.log('handleChange - ', e.target.value)
  }

  handleSubmit () {
    const updatedTodo = [...this.state.todos, this.state.todoItem];
    this.setState({todos: updatedTodo});
  }


  render(){
    return (
      <div>
        <Header />
    
        <input type="text" placeholder="enter item" onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Enter</button>

        <ToDos todos={this.state.todos}/>
      </div>
    );

  }
}


export default MainContainer;
