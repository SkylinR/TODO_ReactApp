import React, { Component } from 'react';
import SingleTask from './SingleTask';
import '../styles/App.css';

class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const todos = this.props.taskList.map( (e, i) => {
                return (<SingleTask key={i+1} content={e.content} date={e.date}/>);
        });

        return (
            <div className="tasks">
                <h1 className="tasks-header">Recent tasks</h1>
                <ul className="tasks-list">
                    {todos}
                </ul>
            </div>
        );
    }
}

export default Tasks;
