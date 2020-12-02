import React, { Component } from 'react'

class ToDo extends Component {

    todoItems = this.props.todolist.map((todo) =>
        <li key={todo.id}>
            {todo.text}
        </li>
    );

    render() {
        return (
            <ul>
                {this.todoItems}
            </ul>
        )
    }
}

export default ToDo
