import React from 'react'
import base from './base'
import { Route, Switch } from 'react-router-dom'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteFrom from './NoteForm'
import { height } from 'window-size';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            // currentNote: this.blankNote(),
            notes: [
            ]
        }
    }
    componentWillMount() {
        base.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true
        })
    }
    // resetCurrentNote = () => {
    //     this.setCurrentNote(this.blankNote())
    // }

    // setCurrentNote = (note) => {
    //     this.setState({ currentNote: note })
    // }
    saveNote = (note) => {
        let shouldRedirect = false
        const notes = [...this.state.notes]
        const timestamp = Date.now()
        note.updateAt = timestamp

        if (!note.id) {
            note.id = Date.now()
            notes.push(note)
            shouldRedirect=true
        } else {
            const i = notes.findIndex(currentNote => currentNote.id === note.id)
            notes[i] = note
        }
        notes.sort((a, b)=> {
            return b.updateAt - a.updateAt
        }
    )

        this.setState({ notes })
        // this.setCurrentNote(note)
        if(shouldRedirect){
        this.props.history.push(`notes/${note.id}`)
        }

        // window.localStorage.setItem('notes', JSON.stringify(notes))
    }
    deleteNote = (currentNot) => {
        const notes = [...this.state.notes]
        const id = this.props.match.params.id
        const i = notes.findIndex(note => note.id === currentNot.id)
        if (i > -1) {
            notes.splice(i, 1)
            this.setState({ notes })
            this.props.history.push(`/notes`)
            // window.localStorage.setItem('notes', JSON.stringify(notes))
        }
    }

    render() {
        const formProps = {
            // currentNote: this.state.currentNote,
            saveNote: this.saveNote,
            deleteNote: this.deleteNote,
            
      notes: this.state.notes,
        }
        return (
            <div className="Main" style={style}>
                <Sidebar
                    signOut={this.props.signOut} />
                <NoteList notes={this.state.notes}/>
                <Switch>
          <Route
            path="/notes/:id"
            render={navProps => (
              <NoteFrom
                {...formProps}
                {...navProps}
              />
            )}
          />
          <Route
            render={navProps => (
              <NoteFrom
                {...formProps}
                {...navProps}
              />
            )}
          />
        </Switch>
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