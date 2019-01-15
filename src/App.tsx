import * as React from "react";
import logo from './logo.svg';
import './App.css';
import {  Input } from "antd";
import "antd/dist/antd.css"
import * as serviceWorker from "./serviceWorker";


interface State {
    toDo: String;
    toDoList?: Array<String>;
};
const Search =  Input.Search;
class App extends React.Component<{}, State> {
  state = {
    toDo: ""
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ToDo List</h1>
          <Search
            placeholder="To Do"
            onSearch={value => console.log(value)}
            style={{ width:200 }}
          />
        </header>
      </div>
    );
  }
}

export default App;
