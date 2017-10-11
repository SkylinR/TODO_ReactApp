import React, {Component} from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';
import axios from 'axios';

class TasksWrapper extends Component {

    root = 'http://localhost:4000/api/tasks';

    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
        }

        this.addTask = this.addTask.bind(this);
    }

    componentWillMount() {
        this.getList();
    }

    getList = () => {

        axios.get(this.root)
            .then((tasksList) => {
                let tasksListNewest = tasksList.data.filter(function (task, index) {
                    if (index >= tasksList.data.length - 4) {
                        return task;
                    }
                    else {
                        return 0;
                    }
                });

                this.setState({tasksList: tasksListNewest});
            })
            .catch(function (e) {
                console.log(e);
            });

    }

    addTask(singleTask) {
        axios.post(this.root, singleTask)
            .then(() => {
                this.getList();
            })
    }

    render() {
        return (
            <div className="tasks-wrapper">
                <div className="app-intro">
                    <AddTask addTask={this.addTask} />
                    <Tasks taskList={this.state.tasksList} getList={this.getList}/>
                </div>
            </div>
        );
    }
}

export default TasksWrapper;
