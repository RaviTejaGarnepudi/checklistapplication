import React, { Component } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md';

class ToDo extends Component {
    render() {
        return (
            this.props.todolist.map((todo, index) =>
                <li key={todo.id} style={{ width: '18rem' }}>
                    {todo.text}
                   <span style={{alignContent:'end'}}> 
                        <MdEdit style={{cursor : 'pointer'}} onClick={() => this.props.onChildEditClick(index, todo.id)} />
                        <MdDelete style={{cursor : 'pointer'}} onClick={() => this.props.onChildDeleteClick(todo.id)} />
                    </span>
                </li>
            )
        )
    }
}

export default ToDo
