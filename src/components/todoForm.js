import React, { Component } from 'react';

class ToDoForm extends Component {
    state = { todostring: '' };

    handleChange = (e) => {
        this.setState({ todostring: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: this.state.todostring
        });
        this.setState({todostring:''});
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit} >
                <input type="text" name="text" className="todo-input"
                    placeholder="Add todo list" value={this.state.todostring} onChange={this.handleChange} />
                <button className="todo-button"
                    type="submit">Add todo List</button>
            </form>
        );
    }
};

export default ToDoForm