import React from 'react'

const NoteList = () =>{
    return (
        <div class="NoteList" style={styles.noteList}>
        <h3 style={styles.noteListH3}>Notes</h3>
        <ul id="notes" style={styles.noteListUlList}>
          <a class="active" style={styles.noteListUlNoteA}>
            <li>
              <div class="note" style={styles.noteListUlNoteLi}>
                <div class="note-title" style={styles.noteListULNotesLiTitle}>
                  Kohlrabi welsh
                </div>
                <div class="note-body" style={styles.noteListULNoteLiBody}>
                  <p>
                    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                  </p>
                </div>
              </div>
            </li>
          </a>
          <a>
            <li>
              <div class="note" style={styles.noteListUlNoteLi}>
                <div class="note-title" style={styles.noteListULNotesLiTitle}>
                  Dandelion cucumber
                </div>
                <div class="note-body" style={styles.noteListULNoteLiBody}>
                  <p>
                    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                  </p>
                </div>
              </div>
            </li>
          </a>
          <a>
            <li>
              <div class="note" style={styles.noteListUlNoteLi}>
                <div class="note-title" style={styles.noteListULNotesLiTitle}>
                  Prairie turnip
                </div>
                <div class="note-body" style={styles.noteListULNoteLiBody}>
                  <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                  </p>
                </div>
              </div>
            </li>
          </a>
        </ul>
      </div>
    )
}
const styles = {
    noteList: {
        borderLeft: '1px solid #eee',
        borderLight: '1px solid #eee',
        width: '30rem'
      },
    //   @media (max-width: 800px) {
    //     .NoteList {
    //       width: 20rem',
    //     },
    //   },
      noteListH3: {
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Oxygen',
        fontWeight: '300',
        letterSpacing: '3px',
        margin: '20px 2rem',
      },
      noteListUlList: {
        borderTop: '1px solid #eee',
        overflowY: 'scroll',
        height: 'calc(100vh - 72px)',
        listStyle: 'none',
        marginTop: '1em',
        padding: '0',
        width: '100%',
        color: '#999',
      },
      noteListUlNoteA: {
        color: 'inherit',
        textDecoration: 'none',
      },
      noteListUlNoteLi: {
        height: '100px',
        fontSize: '90%',
        cursor: 'pointer',
        overflow: 'hidden',
      },
      noteListULNoteATransition: {
        WebkitTransition: 'background-color .1s ease-inOut, color .1s ease-inOut',
        OTransition: 'background-color .1s ease-inOut, color .1s ease-inOut',
        transition: 'background-color .1s ease-inOut, color .1s ease-inOut',
      },
      noteListULNoteLiNote: {
        borderTop: '1px solid #eee',
        margin: '0 2rem',
        padding: '1rem 4px',
      },
      noteListUlNotesAFirstLiNote: {
        borderTop: 'none',
      },
      noteListUlNotesLiHover: {
        backgroundColor: '#008bf8',
      },
      noteListUlNoteLihovNote: {
        color: '#fff!important',
        textDecoration: 'none !important',
      },
      noteListUlLiHovNote: {
        borderColor: 'transparent',
      },
      noteListULNotesLiTitle: {
        color: '#4a4a4a',
        fontFamily: 'Fauna One',
        fontSize: '120%',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        OTextOverflow: 'ellipsis',
        textOverflow: 'ellipsis',
      },
      noteListULNoteLiBody: {
        height: '54px',
        overflow: 'hidden',
        marginTop: '.5rem',
      },
      noteListULNoteLiBodyEx: {
        fontSize: '1em!important',
        margin: '0!important',
        padding: '0!important',
        color: '#999!important',
        background: 'none',
        border: 'none',
      },
      noteListULNoteLInotes: {
        display: 'block',
        height: '100px',
        padding: '1em',
        textDecoration: 'none',
      },
}


export default NoteList