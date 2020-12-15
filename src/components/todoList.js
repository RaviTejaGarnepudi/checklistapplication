import React, { Component } from 'react'
import ToDo from './todo';
import ToDoForm from './todoForm';
import { Card, Button } from 'react-bootstrap';
import ShareButton from 'react-web-share-button';

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
        const value = prompt("Please update your item:", this.state.todos[index].text);
        if (value === null) {
            return; //break out of the function early
        }
        const newtodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.text = value.replace(/\s+/g, ' ').trim();
            }
            return todo;
        });
        this.setState({ todos: newtodos });
    }

    render() {
        return (
            <div className="container">
                <Card style={{ width: '20rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                    <ToDoForm onSubmit={this.addtoList} />
                    <ShareButton title="Share" text={this.state.todos.text} content={this.state.todos.text} />                        
                    <ul class="list-group">
                        <ToDo todolist={this.state.todos} onChildDeleteClick={this.clickDelete} onChildEditClick={this.clickEdit} />
                    </ul>
                </Card>
            </div>
        )
    }
}

export default ToDoList
