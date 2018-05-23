import React from 'react'
import './App.css'
const NoteFrom = () => {
  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
          />
        </p>

          <textarea name="body"></textarea>
      </form>
    </div>
      )
  }
  
// const styles = {
//         noteForm: {
//         msFlexPositive: '1',
//       flexGrow: '1',
//       padding: '0 3rem',
//     },
//       noteFormActions: {
//         paddingTop: '1rem',
//       marginLeft: '-2rem',
//       display: '-ms-flexbox',
//       display: 'flex',
//       msFlexLinePack: 'center',
//       alignContent: 'center',
//     },
//       noteFormButton: {
//         border: 'none',
//       background: 'none',
//       padding: '0',
//     },
//       noteFormSubmitButton: {
//         backgroundColor: '#008bf8',
//       borderRadius: '4px',
//       color: '#fff',
//       fontSize: '1.4rem',
//       padding: '1rem',
//     },
//       noteFormButtonIFa: {
//         color: '#999',
//       fontSize: '2rem',
//       margin: '0',
//     },
//       noteFormForm: {
//         margin: '0 auto',
//       maxWidth: '80rem',
//     },
//       noteFormInputTitle: {
//         border: 'none',
//       fontSize: '200%',
//       fontFamily: 'Fauna One',
//       color: '#008bf8',
//       fontWeight: '400',
//       width: '100%',
//       outline: 'none',
//     },
//       noteFormTextarea: {
//         borderColor: '#eee',
//       width: '100%',
//       height: 'calc(100vh - 140px)',
//       fontSize: '1.3em',
//     },
    
// }

export default NoteFrom