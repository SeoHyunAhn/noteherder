import React from 'react'
import './App.css'
const NoteFrom = ({currentNote, saveNote, deleteNote}) => {
  const handelChanges = (ev) => {
    const note = {...currentNote}
    note[ev.target.name] = ev.target.value
    saveNote(note)
  }
  const handleDelete = (ev) =>{
    const note = {...currentNote}
    deleteNote(note)
  }
  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button" onClick={handleDelete}>
          <i className="far fa-trash-alt" ></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={currentNote.title}
            onChange={handelChanges}
          />
        </p>

          <textarea name="body" value={currentNote.body}
            onChange={handelChanges}></textarea>
      </form>
    </div>
      )
  }

export default NoteFrom