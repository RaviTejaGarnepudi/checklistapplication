import React, { Component } from 'react'

class ToDo extends Component {
    render() {
        return (
            this.props.todolist.map((todo) =>
                <li key={todo.id}>
                    {todo.text}
                </li>
            )
        )
    }
}

export default ToDo
