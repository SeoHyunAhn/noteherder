import React from 'react'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return (
        <div className="Sidebar" style={styles.sidebar}>
            <div className="logo" style={styles.logo}>
                <img src={quill} alt="Noteherder" style={styles.logoImg}/>
            </div>
            <a href="/notes" style={styles.newNote}>
                <img
                    src={newHover}
                    alt="New Note"  style={styles.aHovImg}/>
                <img
                    src={newIcon}
                    alt="New Note" style={styles.aImg}/>

            </a>
            <div className="SignOut" style={styles.signOut}>
            <button style={styles.SignoutBut}>
              <i className="fa fa-sign-out" style={styles.signOutButI}></i>
            </button>
          </div>
        </div>
    )
}
const styles = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    logo: {
        fontfamily: 'Fauna One',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg: {
        width: '30px',
        paddingLeft: '4px',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '40px',
    },
    button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
    },
    aImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
    },
    aHovImg: {
        opacity: '0'
    },
    signOut: {
        position: 'absolute',
        bottom: '1rem'
    },
    SignoutBut: {
        outline: 'none'
    },
    signOutButI: {
        fontSize: '2rem'
    },
}

export default Sidebar