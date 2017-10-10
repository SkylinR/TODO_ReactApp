import React, {Component} from 'react';
import TasksWrapper from './TasksWrapper';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <h2>Welcome to TODO app</h2>
                </div>
                <TasksWrapper/>
            </div>
        );
    }
}

export default App;
