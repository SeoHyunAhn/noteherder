import React from 'react'
import base from './base'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteFrom from './NoteForm'
import { height } from 'window-size';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: [
            ]
        }
    }
componentWillMount(){
    base.syncState(`notes/${this.props.uid}`, {
        context: this, 
        state: 'notes',
        asArray: true
    })
}

    blankNote = () => {
        return {
            id: null, title: "", body: ""
        }
    }
    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }
    saveNote = (note) => {
        const notes = [ ...this.state.notes ]

        if (!note.id){
            note.id = Date.now()
            notes.push(note)
        }else {
        const i = notes.findIndex(currentNote => currentNote.id === note.id )
        notes[i] = note
        }
        
        this.setState ({notes})
        this.setCurrentNote(note)

        // window.localStorage.setItem('notes', JSON.stringify(notes))
    }
    deleteNote = (note) =>{
        const notes = [...this.state.notes]
        const i = notes.findIndex(currentNote => currentNote.id === note.id )
        // notes[i].id = null
        // notes[i].title=""
        // notes[i].body=""
        // debugger
        if (i>-1){
        notes.splice(i, 1)
        this.setState({notes})
        // window.localStorage.setItem('notes', JSON.stringify(notes))
    }
    }

    render() {
        return (
            <div className="Main" style={style}>
                <Sidebar resetCurrentNote={this.resetCurrentNote} signOut = {this.props.signOut}/>
                <NoteList notes={this.state.notes} setCurrentNote={this.setCurrentNote}  />
                <NoteFrom currentNote={this.state.currentNote} saveNote={this.saveNote} deleteNote={this.deleteNote} />
            </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}

export default Main