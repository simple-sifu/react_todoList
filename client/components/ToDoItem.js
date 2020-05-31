import React, { Component } from 'react';





export class ToDoItem extends Component {

  render() {  
    return (
      <li>
        { this.props.todos.title }
      </li>
 
    )
  }
}

