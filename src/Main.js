import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteFrom from './NoteForm'
import { height } from 'window-size';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: {id:null, title:"", body:""},
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
    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }
    render() {
        return (
            <div className="Main" style={style}>
                <Sidebar />
                <NoteList notes={this.state.notes} setCurrentNote={this.setCurrentNote} />
                <NoteFrom currentNote={this.state.currentNote}/>
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