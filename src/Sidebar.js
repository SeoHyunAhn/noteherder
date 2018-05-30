import React from 'react'
import {StyleSheet, css } from 'aphrodite'
import {Link} from 'react-router-dom'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = ({ signOut}) => {
    return (
        <nav className={css(styles.sidebar)}>
            <div className={css(styles.logo)}>
                <img src={quill} alt="Noteherder" className={css(styles.logoImg)} />
            </div>
            <Link to ="/notes" className={css(styles.newNote)}>
                {/* ev.preventDefault()
                resetCurrentNote()}}> */}
                <img
                    src={newHover}
                    alt="New Note" className={css(styles.aImg)} />
                <img
                    src={newIcon}
                    alt="New Note" className={ css(styles.aImg, styles.newNoteImgHov) } />

            </Link>
            <div className={css(styles.signOut)}>
                <button className={css(styles.SignoutBut, styles.button )} onClick= {signOut}>
                    <i className={`fas fa-sign-out-alt ${css(styles.signOutButI)}`} title="signout"></i>
                </button>
            </div>
        </nav>
    )
}
    

const styles = StyleSheet.create ({
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    newNoteImgHov:{
        ':hover':{
            opacity: 0,
        },
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
})

export default Sidebar