import React, { Component } from 'react';
import SingleTask from './SingleTask';

class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const todos = this.props.taskList.map( (e) => {
                return (<SingleTask key={e._id} content={e.content} date={e.date} id={e._id}/>);
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
