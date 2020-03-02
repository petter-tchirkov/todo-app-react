import React from 'react';
import './App.css';
import Notes from '../src/components/notes'
import { WithouIndex } from './utils'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [

      ]
    };
  }

  onNoteDelete = indextoRemove => {
    this.setState(oldState => {
      return {
        notes: WithouIndex(oldState.notes, indextoRemove)
      };
    })
  }

  onNoteCreate = newNoteText => {
    this.setState(oldState => {
      return {
        notes: [newNoteText].concat(oldState.notes)
      };
    });
  };

  render() {
    return (
      <Notes notes={this.state.notes}
        onDelete={this.onNoteDelete}
        onCreate={this.onNoteCreate}
      />
    );
  }
}

export default App;
