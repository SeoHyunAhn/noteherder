import React from 'react'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteFrom from './NoteForm'
import { height } from 'window-size';

const Main = () => {
    return (
        <div className="Main">
            <Sidebar />
            <NoteList />
            <NoteFrom />
        </div>
    )
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}

export default Main