import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/todoList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    
    render() {
        return (
            <div>
                <ToDoList />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

