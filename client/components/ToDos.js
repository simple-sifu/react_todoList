import React, { Component } from 'react';
// import ToDoItem from './ToDoItem.jsx';


class ToDos extends Component {

  render(){
    const listItems = this.props.todos
    const listToDos = listItems.map((item) => <li key={item.slice(0,3)}>{item}</li>
    )

    return (   
     <ul>{listToDos} </ul>
    )
  }
}

export default ToDos;