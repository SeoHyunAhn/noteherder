import React from 'react'
import './App.css'
import Note from './Note'

const NoteList = () => {
  const notes = [{
    id:1,
    title: 'why i <3 js',
    body: 'bc i like code',
  },
  {
    id:2,
    title: 'breakfast',
    body: 'i <3 it',
  },
  {
    id:3,
    title: 'watching the first ep of black mirror',
    body: 'dont\'t',
  }
]
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        <a className="active">
          {notes.map(note => <Note note={note} />)
          }
        </a>
      </ul>
    </div>
  )
}
// const styles = {
//     noteList: {
//         borderLeft: '1px solid #eee',
//         borderLight: '1px solid #eee',
//         width: '30rem'
//       },
//     //   @media (max-width: 800px) {
//     //     .NoteList {
//     //       width: 20rem',
//     //     },
//     //   },
//       noteListH3: {
//         color: '#999',
//         textTransform: 'uppercase',
//         fontSize: '2rem',
//         fontFamily: 'Oxygen',
//         fontWeight: '300',
//         letterSpacing: '3px',
//         margin: '20px 2rem',
//       },
//       noteListUlList: {
//         borderTop: '1px solid #eee',
//         overflowY: 'scroll',
//         height: 'calc(100vh - 72px)',
//         listStyle: 'none',
//         marginTop: '1em',
//         padding: '0',
//         width: '100%',
//         color: '#999',
//       },
//       noteListUlNoteA: {
//         color: 'inherit',
//         textDecoration: 'none',
//       },
//       noteListUlNoteLi: {
//         height: '100px',
//         fontSize: '90%',
//         cursor: 'pointer',
//         overflow: 'hidden',
//       },
//       noteListULNoteATransition: {
//         WebkitTransition: 'background-color .1s ease-inOut, color .1s ease-inOut',
//         OTransition: 'background-color .1s ease-inOut, color .1s ease-inOut',
//         transition: 'background-color .1s ease-inOut, color .1s ease-inOut',
//       },
//       noteListULNoteLiNote: {
//         borderTop: '1px solid #eee',
//         margin: '0 2rem',
//         padding: '1rem 4px',
//       },
//       noteListUlNotesAFirstLiNote: {
//         borderTop: 'none',
//       },
//       noteListUlNotesLiHover: {
//         backgroundColor: '#008bf8',
//       },
//       noteListUlNoteLihovNote: {
//         color: '#fff!important',
//         textDecoration: 'none !important',
//       },
//       noteListUlLiHovNote: {
//         borderColor: 'transparent',
//       },
//       noteListULNotesLiTitle: {
//         color: '#4a4a4a',
//         fontFamily: 'Fauna One',
//         fontSize: '120%',
//         fontWeight: '400',
//         whiteSpace: 'nowrap',
//         overflowX: 'hidden',
//         OTextOverflow: 'ellipsis',
//         textOverflow: 'ellipsis',
//       },
//       noteListULNoteLiBody: {
//         height: '54px',
//         overflow: 'hidden',
//         marginTop: '.5rem',
//       },
//       noteListULNoteLiBodyEx: {
//         fontSize: '1em!important',
//         margin: '0!important',
//         padding: '0!important',
//         color: '#999!important',
//         background: 'none',
//         border: 'none',
//       },
//       noteListULNoteLInotes: {
//         display: 'block',
//         height: '100px',
//         padding: '1em',
//         textDecoration: 'none',
//       },
// }


export default NoteList