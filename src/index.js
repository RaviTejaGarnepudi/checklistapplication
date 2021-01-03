import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './todocomponents/todoList';
import Clock from './clockcomponent/clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherReport from './WeatherReport/weatherReport';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="ui secondary  menu">
                    <h4 className="item">Sample Demo Applications</h4>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui transparent">
                                <Clock />
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>To Do List</Tab>
                        <Tab>Weather Report</Tab>
                    </TabList>

                    <TabPanel>
                        <ToDoList />
                    </TabPanel>
                    <TabPanel>
                        <WeatherReport />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

