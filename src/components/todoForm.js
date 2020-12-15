import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { WhatsappShareButton, WhatsappIcon } from "react-share";

class ToDoForm extends Component {
    state = { todostring: '' };

    handleChange = (e) => {
        this.setState({ todostring: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.todostring.replace(/\s+/g, ' ').trim() === null || this.state.todostring.replace(/\s+/g, ' ').trim() === '') {
            return;
        }
        this.props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: this.state.todostring.replace(/\s+/g, ' ').trim()
        });
        this.setState({ todostring: '' });
    }

    render() {
        return (
            <form className="form-group" onSubmit={this.handleSubmit} >
                <Card.Body>
                    <Card.Title>Add List here!!</Card.Title>
                    <Card.Text>
                        <div className="input-group">
                            <input type="text" name="text" className="todo-input form-control"
                                placeholder="Add list" value={this.state.todostring} onChange={this.handleChange} />
                            <span class="input-group-btn">
                                <Button style={{ float: 'right' }} className="todo-button" variant="primary" type="submit">
                                    Add
                                </Button>
                            </span>
                        </div>
                    </Card.Text>
                </Card.Body>
            </form>
        );
    }
};

export default ToDoForm