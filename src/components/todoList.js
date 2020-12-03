import React, { Component } from 'react'
import ToDo from './todo';
import ToDoForm from './todoForm'

class ToDoList extends Component {

    state = { todos: [{id:1234,text:'abc'}] }

    addtoList = (newtodoString) => {
        const newtodos = [newtodoString, ...this.state.todos]
        this.setState({ todos: newtodos });
    }
    render() {
        return (
            <div>
                Add ToDo List here!!!<br />
                <ToDoForm onSubmit={this.addtoList} />
                <ToDo todolist={this.state.todos} />
            </div>
        )
    }
}

export default ToDoList
