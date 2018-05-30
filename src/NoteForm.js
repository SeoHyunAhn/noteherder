import React from 'react'
import {Component} from 'react'
import './App.css'
class NoteFrom extends Component {
  constructor(props) {
    super(props)
    this.state ={
      note: this.blankNote(),
            
    }
  }
  blankNote = () => {
    return {
        id: null, title: "", body: ""
    }
}
componentWillReceiveProps=(newProps) => {
  const newid = newProps.match.params.id
  const  i = newProps.notes.findIndex(currentNote => currentNote.id.toString() === newid)
  const note = newProps.notes[i] || this.blankNote()
  if (note) {
    this.setState({note})
  }
}
   handelChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      {note}, () =>
    this.props.saveNote(note))
  }
   handleDelete = (ev) =>{
    const note = {...this.props.currentNote}
    this.props.deleteNote(note)
  }
  render(){
    const { deleteNote}=this.props
    
  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button" onClick={this.handleDelete}>
          <i className="far fa-trash-alt" ></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={this.state.note.title}
            onChange={this.handelChanges}
          />
        </p>

          <textarea name="body" value={this.state.note.body}
            onChange={this.handelChanges}></textarea>
      </form>
    </div>
      )}
  }

export default NoteFrom