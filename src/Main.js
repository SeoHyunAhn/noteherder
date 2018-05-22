import React from 'react'
 import Sidebar from './Sidebar'
 import NoteList from './NoteList'
 import NoteFrom from './NoteForm'

const Main =  () => {
    return (
    <div className="Main">
        <Sidebar />
        <NoteList />
        <NoteFrom />
    </div>
)
}

export default Main