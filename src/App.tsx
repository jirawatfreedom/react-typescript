import * as React from "react";
import logo from './logo.svg';
import './App.css';
import {  Input } from "antd";
import "antd/dist/antd.css"
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, ActionCreatorsMapObject} from "redux";
import * as serviceWorker from "./serviceWorker";
import {addToDoList} from './actions/toDo';
import ToDoList from "./components/ToDoList";


interface State {
    toDo: String;
   
}
interface Props {
  addToDoList?: any;
}
const Search =  Input.Search;
class App extends React.Component<Props, State> {
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
            onSearch={value => this.props.addToDoList(value)}
            style={{ width:200 }}
          />
          <ToDoList />
        </header>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch): ActionCreatorsMapObject => {
  return bindActionCreators(
    {
      addToDoList: addToDoList
    },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(App);
