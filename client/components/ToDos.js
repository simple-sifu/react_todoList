import React, { Component } from 'react';
// import ToDoItem from './ToDoItem.jsx';


class ToDos extends Component {

  render(){
    const listItems = this.props.todos
    const listToDos = listItems.map((item, idx) => <li key={idx}>{item}</li>
    )

    return (   
     <ul>{listToDos} </ul>
    )
  }
}

export default ToDos;