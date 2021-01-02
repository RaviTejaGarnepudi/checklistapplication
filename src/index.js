import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './todocomponents/todoList';
import Clock from './clockcomponent/clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherReport from './WeatherReport/weatherReport';

class App extends Component {

    render() {
        return (
            <div className="">
                <Clock />
                <div class="row container">
                    <WeatherReport class="column" />
                    <ToDoList class="column" />
                </div>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

