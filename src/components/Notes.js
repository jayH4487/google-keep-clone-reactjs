import React, {useState} from "react"
import Note from "./Note"
import Modal from "./Modal"

function Notes({notes}) {

    const [modalClass, setModalClass] = useState("")
    const [modalNote, setModalNote] = useState({})   

    const displayNotes = notes.map((note) => {
        return (
            <Note
                key={note.id}
                note={note}
                openModal={openModal}
            />
        )
    })

    const placeholder = notes.length === 0 ?
        <div id="placeholder">
            <img
                id="placeholder-logo"
                src="https://icon.now.sh/lightbulb_outline"
                alt=""
            />
            <p id="placeholder-text">Notes you add appear here</p>
        </div>
        : null

    function openModal(id) {
        setModalClass("open-modal")
        const [note] = notes.filter(note => note.id === id)
        setModalNote(note)
    }
    
    function closeModal() {
        setModalClass("")
    }

    return (
        <>
            <Modal
                modalClass={modalClass}
                modalNote={modalNote}
                closeModal={closeModal}
            />

            <div id="notes">
                {displayNotes}
            </div>
            {placeholder}
        </>
    )
}

export default Notes