import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class ToDoForm extends Component {
    state = { todostring: '' };

    handleChange = (e) => {
        this.setState({ todostring: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.todostring.replace(/\s+/g,' ').trim() === null || this.state.todostring.replace(/\s+/g,' ').trim() === '') return;
        this.props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: this.state.todostring.replace(/\s+/g,' ').trim()
        });
        this.setState({ todostring: '' });
    }

    render() {
        return (
            <form className="todo-form flex container" onSubmit={this.handleSubmit} >
                <Card style={{ width: '18rem', align: "center" }}>
                    <Card.Body>
                        <Card.Title>Add ToDo List here!!!</Card.Title>
                        <Card.Text>
                            <input type="text" name="text" className="todo-input"
                                placeholder="Add todo list" value={this.state.todostring} onChange={this.handleChange} />
                                <Button className="todo-button" variant="primary" type="submit">Add todo List</Button>
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </form>
        );
    }
};

export default ToDoForm