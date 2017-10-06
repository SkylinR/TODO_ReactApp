import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-icons-kit';
import { remove } from 'react-icons-kit/fa/remove';
import { edit } from 'react-icons-kit/fa/edit';


class SingleTask extends Component {

    // static propTypes = {
    //     content: PropTypes.string,
    //     date: PropTypes.string,
    //     // elemId: PropTypes.number.isRequired,
    // };

    editTask(){
        // alert("EDIT TASK " + this.props.elemId);
        // console.log("edit element from database with id: " + this.props.elemId)
    }

    removeTask(){
        // console.log("remove element from database with id: " + this.props.elemId)
        // alert("REMOVE TASK " + this.props.elemId);
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
