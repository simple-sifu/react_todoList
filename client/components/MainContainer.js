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
      ]
    }

  }

  render(){
    return (
      <div>
        <Header />
          <ToDos todos={this.state.todos}/>
      </div>
    );

  }
}

export default MainContainer;
