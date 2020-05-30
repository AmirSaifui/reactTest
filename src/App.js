import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// import FirstComponent from './components/FirstComponent';
// import {SecondComponent} from './components/FunctionComponent'; // function component imported without default keyword hence written in {}
// import Counter from './components/counter/counter' 
import TodoApp from './components/ToDoApp/todoApp'
// import './bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
      </div>
      );
  }
}

// class BasicComponent extends Component {
//   render() {
//     return (
//       <div className="App">
//         My test react app
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//       </div>
//       );
//   }
// }

export default App;
