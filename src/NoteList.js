import React from 'react'
import './App.css'
import Note from './Note'

const NoteList = ({notes, setCurrentNote}) => {
  // const sortNotes =() => {

  // }
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {/* <a className="active"> */}
          {notes.map(note => <Note key = {note.id} note={note} 
            setCurrentNote={setCurrentNote}/>)
          }
        {/* </a> */}
      </ul>
    </div>
  )
}

export default NoteList