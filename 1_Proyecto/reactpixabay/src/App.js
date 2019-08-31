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
      { 
        this.state.tasks.map( e => <p key={e.id}>
          {e.title} - {e.description} - {e.donde} - {e.id}
        </p>)
      }
    </div>;
  }
}

export default App;