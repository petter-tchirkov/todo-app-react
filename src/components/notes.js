import React, { Component } from 'react'
import './notes.css'
import ReactMarkdown from 'react-markdown'

class Note extends React.Component {
  render() {
    return (
      <div className="Notes-Note">
        <span className="Notes-Note-Delete" onClick={this.props.onDelete}>&times;</span>
        <ReactMarkdown source={this.props.text} />
      </div>
    )
  }
}

class CreateNote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.inputRef = React.createRef();
  }
  onTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  };

  onReset = () => {
    this.setState({
      text: ''
    },
      () => {
        this.inputRef.current.focus();
      }
    );

  }
  onSave = () => {
    this.props.onCreate(this.state.text);
    this.onReset();
  }

  render() {
    return (
      <div className="Notes-Create Notes-Note">
        <textarea className="Notes-Create-Input"
          value={this.state.text}
          onChange={this.onTextChange}
          ref={this.inputRef}></textarea>
        <div className="Notes-Create-Buttons">
          <button className="Notes-Create-Button" onClick={this.onSave}>Save</button>
          <button className="Notes-Create-Button Notes-Create-Button_reset" onClick={this.onReset}>Discard</button>
        </div>
      </div>
    )
  }
}

class Notes extends React.Component {
  render() {
    return (
      <div className="Notes">
        <CreateNote onCreate={this.props.onCreate} />
        {this.props.notes.map((text, index) => {
          return <Note text={text}
            key={index}
            onDelete={() => this.props.onDelete(index)} />
        })}
      </div>
    )
  }
}

export default Notes;