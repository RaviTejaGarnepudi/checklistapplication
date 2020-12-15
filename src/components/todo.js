import React, { Component } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md';

class ToDo extends Component {
    render() {
        return (
            this.props.todolist.map((todo, index) =>
                <li className="list-group-item" key={todo.id} style={{ width: '20rem'}}>
                    {todo.text}
                   <span style={{alignContent:'end'}}> 
                        <MdEdit style={{cursor : 'pointer', float : 'right'}} onClick={() => this.props.onChildEditClick(index, todo.id)} />
                        <MdDelete style={{cursor : 'pointer', float : 'right'}} onClick={() => this.props.onChildDeleteClick(todo.id)} />
                    </span>
                </li>
            )
        )
    }
}

export default ToDo
