import React, { Component } from 'react';
import SingleTask from './SingleTask';

class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentlyEdit: '',
            currentlyEditState: '',
        }
        this.clearEditTask = this.clearEditTask.bind(this);
    }

    clearEditTask(id, editedState){
        this.setState({
            currentlyEdit: id,
            currentlyEditState: editedState,
        });

    }

    render() {

        const todos = this.props.taskList.map( (e) => {
            if(this.state.currentlyEdit === e._id){
                if(this.state.currentlyEditState){
                    return (<SingleTask key={e._id} content={e.content} date={e.date} id={e._id} getList={this.props.getList} clearEditTask={this.clearEditTask} changeChildProp={this.changeChildProp} edit={false}/>);
                }
                else{
                    return (<SingleTask key={e._id} content={e.content} date={e.date} id={e._id} getList={this.props.getList} clearEditTask={this.clearEditTask}  edit={true}/>);
                }
            }
            else{
                return (<SingleTask key={e._id} content={e.content} date={e.date} id={e._id} getList={this.props.getList} clearEditTask={this.clearEditTask} changeChildProp={this.changeChildProp} edit={false}/>);
            }
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
