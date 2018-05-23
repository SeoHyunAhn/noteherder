import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteFrom from './NoteForm'
import { height } from 'window-size';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: [{
                id: 1,
                title: 'why i <3 js',
                body: 'bc i like code',
            },
            {
                id: 2,
                title: 'breakfast',
                body: 'i <3 it',
            },
            {
                id: 3,
                title: 'watching the first ep of black mirror',
                body: 'dont\'t',
            }
            ]
        }
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
    }
    deleteNote = (note) =>{
        const notes = [...this.state.notes]
        const i = notes.findIndex(currentNote => currentNote.id === note.id )
        // notes[i].id = null
        // notes[i].title=""
        // notes[i].body=""
        // debugger
        notes.splice(i, 1)
        this.setState({notes})
        debugger
        if(note[i]!=null){
        this.setCurrentNote(notes[i])
        }else{
            this.setCurrentNote(notes[i-1])
        }
        
    }

    render() {
        return (
            <div className="Main" style={style}>
                <Sidebar resetCurrentNote={this.resetCurrentNote} />
                <NoteList notes={this.state.notes} setCurrentNote={this.setCurrentNote} />
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