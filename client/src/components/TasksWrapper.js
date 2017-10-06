import React, {Component} from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';

import $ from 'jquery';

var root = 'http://localhost:4000/api/tasks';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
        }
    }

    componentWillMount(){
        $.ajax({
            url: root,
            method: 'GET'
        }).then(function(tasksList) {
            // console.log(tasksList);
            this.setState({tasksList: tasksList})
        }.bind(this));
    }

    componentDidMount(){
        console.log(this.state.tasksList, "tasklist state");
    }

    testowa(eloo){
        console.log(eloo);
    }

    addTask(content, date) {
        console.log(this);
        if(content.length >= 5){
            let singleTask = JSON.stringify({
                content: content,
                date: date
            })
            $.ajax({
                type: "POST",
                url: "http://localhost:4000/api/tasks",
                data: singleTask,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                error: function() {
                    alert('error');
                }
            });
        }
        else {
            alert('You can\'t type less than 5 characters.');
        }
    }

    render() {
        return (
            <div className="TasksWrapper">
                <div className="App-intro">
                    <AddTask addTask={this.addTask} />
                    <Tasks taskList={this.state.tasksList}/>
                </div>
            </div>
        );
    }
}

export default App;
