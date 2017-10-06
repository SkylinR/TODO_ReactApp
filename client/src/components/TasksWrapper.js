import React, {Component} from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';
import '../styles/App.css';

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

    render() {
        return (
            <div className="TasksWrapper">
                <div className="App-intro">
                    <AddTask/>
                    <Tasks taskList={this.state.tasksList}/>
                </div>
            </div>
        );
    }
}

export default App;
