import React, { Component } from 'react'
import ToDo from './todo';
import ToDoForm from './todoForm'

class ToDoList extends Component {
    state = { todos: [] }

    addtoList = (newtodoString) => {
        const newtodos = [...this.state.todos, newtodoString]
        this.setState({ todos: newtodos });
    }

    clickDelete = (id) => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            this.setState({ todos: this.state.todos.filter(x => x.id !== id) });
        }
    }

    clickEdit = (index, id) => {
        const value = prompt("Please enter your name:", this.state.todos[index].text);
        if (value === null) {
            return; //break out of the function early
        }
        const newtodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.text = value.replace(/\s+/g,' ').trim();
            }
            return todo;
        });
        this.setState({ todos: newtodos });
    }

    render() {
        return (
            <div>
                <ToDoForm onSubmit={this.addtoList} />
                <ToDo todolist={this.state.todos} onChildDeleteClick={this.clickDelete} onChildEditClick={this.clickEdit} />
            </div>
        )
    }
}

export default ToDoList
