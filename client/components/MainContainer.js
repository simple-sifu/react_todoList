import React, { Component } from 'react';
// import ToDos from './ToDos'
import Header from './Header'

class MainContainer extends Component {

  // state = {
  //   todos: [
  //     {
  //       id: 1,
  //       title: "Take out the trash",
  //       completed: false
  //     },
  //     {
  //       id: 2,
  //       title: "no trash for me",
  //       completed: true
  //     }
  //   ]
  // }

  render(){
    return (
      <div>
        <Header />
        {/* <ToDos todos={this.state.todos}/> */}
      </div>
    );

  }
}

export default MainContainer;
