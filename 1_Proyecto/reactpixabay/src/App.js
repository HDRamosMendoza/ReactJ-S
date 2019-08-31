/* Para dejar usar React.Component llamo a {Component} */
import React, {Component} from 'react';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './component/tasks';  

class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return <div>
      <Tasks tasks={this.state.tasks}/>
    </div>;
  }
}

export default App;