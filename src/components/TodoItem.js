import React from "react"

class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        const { completed, id, title } = this.props.todo

        return <li className="todo-item"> 
            <input 
                type="checkbox" 
                checked={this.props.todo.completed}
                onChange = {() => this.props.handleChangeProps(this.props.todo.id)}
            /> 
            <button onClick = {() => this.props.deleteTodoProps(this.props.todo.id) }> Delete </button>
            <span style={completed? completedStyle : null}>
                {this.props.todo.title} 
            </span>
        </li>
    }
}

// function TodoItem(props) {
//     return <li> {props.todo.title} </li>
// }

export default TodoItem