import React, { Component } from 'react';
import axios from 'axios';

import Icon from 'react-icons-kit';
import { remove } from 'react-icons-kit/fa/remove';
import { edit } from 'react-icons-kit/fa/edit';



class SingleTask extends Component {

    root = 'http://localhost:4000/api/tasks/';

    constructor(props) {
        super(props);
        this.state = {
            edit: this.props.edit,
            newContent: this.props.content,

        }
    }

    componentDidMount(){
        // console.log(this.props.edit);
    }

    editTask(){
        this.props.clearEditTask(this.props.id, this.props.edit);
        console.log(this);
        console.log(this.aaaaaaaaaa);
        console.log(this.context);
    }

    rewriteTask(e){
        this.setState({newContent: e.target.value});
    }

    updateTask(){
        console.log("Updated task: ", this.state.newContent);
    }

    removeTask(){

        axios.delete(this.root + this.props.id)
            .then(()=>{
            this.props.getList();
        });

    }

    render() {

        return (

        <li className="single-task">

            <div className="task-panel">
                <div className="task-date">{this.props.date}</div>
                <div className="task-btns">
                    <button className="task-btn edit-task" onClick={() => this.editTask()}><Icon size={20} icon={edit} /></button>
                    <button className="task-btn delete-task" onClick={() => {if(window.confirm('Delete item?')) this.removeTask();}}><Icon size={20} icon={remove} /></button>
                </div>
            </div>
            { !this.props.edit &&
                <span className="task-text">{this.props.content}</span>
            }
            { this.props.edit &&
                <div className="edit-task-container">
                    <textarea className="task-textarea" value={this.state.newContent} onChange={(e) => this.rewriteTask(e)} ref={(input) => { this.aaaaaaaaaa = input; }} ></textarea><br/>
                    <button className="btn btn-update-task" onClick={() => this.updateTask()}>update</button>
                </div>
            }

            <div className="bottom-hover-strip"></div>

        </li>
        );
    }
}

SingleTask.defaultProps = {
    edit: false,
};

export default SingleTask;
