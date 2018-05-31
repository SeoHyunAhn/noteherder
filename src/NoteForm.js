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
        id: null, title: "", body: "",
        updateAt: null
    }
}
componentDidUpdate= () =>{
  const newID = this.props.match.params.id || ''
  const oldID = this.state.note.id || ''

  if (newID !== oldID.toString()) {
    const i = this.props.notes.findIndex(currentNote =>currentNote.id.toString() === newID )
    const note = this.props.notes[i] || this.blankNote()
    
    if (note.id !== this.state.note.id){

    this.setState({note})}

  }

}
// componentWillReceiveProps=(newProps) => {
//   const newid = newProps.match.params.id
//   const  i = newProps.notes.findIndex(currentNote => currentNote.id.toString() === newid)
//   const note = newProps.notes[i] || this.blankNote()
//   if (note) {
//     this.setState({note})
//   }
// }
   handelChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      {note}, () =>
    this.props.saveNote(note))
  }
  render(){
    const { deleteNote}=this.props
    
  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button" onClick={() =>deleteNote(this.state.note)}>
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