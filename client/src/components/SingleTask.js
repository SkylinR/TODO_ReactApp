import React, { Component } from 'react';

import Icon from 'react-icons-kit';
import { remove } from 'react-icons-kit/fa/remove';
import { edit } from 'react-icons-kit/fa/edit';


class SingleTask extends Component {

    componentDidMount(){

    }

    editTask(){
        alert("EDIT TASK " + this.props.id);
        console.log(this.props.id);
    }

    removeTask(){
        alert("REMOVE TASK " + this.props.id);
        console.log(this.props.id);
    }

    render() {

        return (

        <li className="single-task">

            <div className="task-panel">
                <div className="task-date">{this.props.date}</div>
                <div className="task-btns">
                    <button className="task-btn edit-task" onClick={() => this.editTask()}><Icon size={20} icon={edit} /></button>
                    <button className="task-btn delete-task" onClick={() => this.removeTask()}><Icon size={20} icon={remove} /></button>
                </div>
            </div>

            <span className="task-text">{this.props.content}</span>
            <div className="bottom-hover-strip"></div>

        </li>
        );
    }
}

export default SingleTask;
