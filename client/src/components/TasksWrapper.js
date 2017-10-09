import React, {Component} from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';
import axios from 'axios';

import $ from 'jquery';

var root = 'http://localhost:4000/api/tasks';

class TasksWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
        }

        this.addTask = this.addTask.bind(this);
    }

    getList = () => {

        axios.get(root)
            .then((tasksList) => {
                let tasksListNewest = tasksList.data.filter(function (task, index) {
                    if (index >= tasksList.data.length - 4) {
                        return task;
                    }
                });

                this.setState({tasksList: tasksListNewest})
            })
            .catch(function (e) {
                console.log(e);
            });

    }

    componentWillMount() {
        this.getList();
    }

    addTask(singleTask) {
        axios.post(root, singleTask)
            .then(() => {
                this.getList();
            })
    }

    render() {
        return (
            <div className="TasksWrapper">
                <div className="App-intro">
                    <AddTask addTask={this.addTask}/>
                    <Tasks taskList={this.state.tasksList}/>
                </div>
            </div>
        );
    }
}

export default TasksWrapper;
