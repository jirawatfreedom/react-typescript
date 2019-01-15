import * as React from "react";
import { connect } from "react-redux";
import { ToDo, toDoReducer } from '../reducers/toDo';
import { List } from "antd"
interface Props {
    toDoReducer?: any;
}
interface toDoReducer {
    toDoList:Array<ToDo>;
}
class ToDoList extends React.Component<Props, {}>{
    render() {
        return (
            <List 
                dataSource={this.props.toDoReducer.toDoList}
                renderItem={(item:ToDo) => <List.Item>{item.title}</List.Item>}
            />
        );
    }
}
const mapStateToProps = ({ toDoReducer }: any) => {
    return { toDoReducer }
}
export default connect(mapStateToProps)(ToDoList);