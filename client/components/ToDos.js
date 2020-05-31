import React, { Component } from 'react';
import ToDoItem from './ToDoItem.jsx';
import PropTypes from 'prop-types';

class ToDos extends Component {

  
  render(){
    return (
      this.props.todos.map((todo) => (
        <p> <ToDoItem key={todo.id} todos={todo}/></p>
      ))

    )
  }

}

ToDos.propTypes = {
  // the todo is the prop that is the key being accessed and also the props being passed down 
  // list the key, what type of data it is, and whether it is required or not
  todos: PropTypes.array.isRequired
}

export default ToDos;