import React, { Component } from 'react';

class ToDoForm extends Component {
    state = { todostring: '', todos: [{ id: 1234, text: "abc" }] };

    handleChange = (e) => {
        this.setState({ todostring: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newtodostring = {
            id: Math.floor(Math.random() * 10000),
            text: this.state.todostring
        };
        const newtodos = [newtodostring, ...this.state.todos];
        this.setState({ todos: newtodos, todostring: '' });
        console.log(newtodos)
    }

    todoItems = this.state.todos.map((todo) =>
        <li key={todo.id}>
            {todo.text}
        </li>
    );

    render() {
        return (
            <div>
                <form className="todo-form" onSubmit={this.handleSubmit} >
                    <input type="text" name="text" className="todo-input"
                        placeholder="Add todo list" value={this.state.todostring} onChange={this.handleChange} />
                    <button className="todo-button"
                        type="submit">Add todo List</button>
                </form>
                <ul>
                    {this.todoItems}
                </ul>
            </div>
        );
    }
};

export default ToDoForm