import React, { Component } from 'react';
import '../styles/App.css';
// import $ from 'jquery';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            date: '',
        }
    }

    getMyDate(){
        console.log(this.state.date);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0' + dd
        }

        if(mm<10) {
            mm = '0' + mm
        }

        today = dd + '/' + mm + '/' + yyyy;

        this.setState({date: today});
    }

    componentDidMount(){
       this.getMyDate();
    }

    writeTask(e){
        var val = e.target.value;

        if (val.length <= 200){
            this.setState({content: val});
        }
        else {
            alert("You can't type more than 200 characters.");
        }
    }

    render() {
        return (
            <div className="add-task">
                <h1 className="add-task-header">Write task down</h1>
                <div className="add-task-form-container">
                    <div action="" className="form">
                        <textarea onChange={(e) => this.writeTask(e)} value={this.state.content} type="text" className="field" placeholder="I have to..." />
                        <button className="add-task-btn" onClick={this.props.addTask.bind(this,this.state.content, this.state.date)}>Add task</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;
