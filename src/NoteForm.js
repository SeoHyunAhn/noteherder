import React from 'react'

const NoteFrom = () => {
    return (
        <div class="NoteForm" style={styles.noteForm}>
          <div class="form-actions" style={styles.noteFormActions}>
            <button type="button" style={styles.noteFormButton}>
              <i class="fa fa-trash-o"style={styles.noteFormButtonIFa}></i>
            </button>
          </div>
          <form style={styles.noteFormForm}>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
                style={styles.noteFormInputTitle}
              />
            </p>
            
            <textarea name="body" style={styles.noteFormTextarea}></textarea>
          </form>
        </div>
    )
}

const styles = {
    noteForm: {
        msFlexPositive: '1',
        flexGrow: '1',
        padding: '0 3rem',
      },
      noteFormActions: {
        paddingTop: '1rem',
        marginLeft: '-2rem',
        display: '-ms-flexbox',
        display: 'flex',
        msFlexLinePack: 'center',
        alignContent: 'center',
      },
      noteFormButton: {
        border: 'none',
        background: 'none',
        padding: '0',
      },
      noteFormSubmitButton: {
        backgroundColor: '#008bf8',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '1.4rem',
        padding: '1rem',
      },
      noteFormButtonIFa: {
        color: '#999',
        fontSize: '2rem',
        margin: '0',
      },
      noteFormForm: {
        margin: '0 auto',
        maxWidth: '80rem',
      },
      noteFormInputTitle: {
        border: 'none',
        fontSize: '200%',
        fontFamily: 'Fauna One',
        color: '#008bf8',
        fontWeight: '400',
        width: '100%',
        outline: 'none',
      },
      noteFormTextarea: {
        borderColor: '#eee',
        width: '100%',
        height: 'calc(100vh - 140px)',
        fontSize: '1.3em',
      },
      
}

export default NoteFrom