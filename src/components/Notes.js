import React, {useState} from "react"
import Note from "./Note"
import Modal from "./Modal"
import Placeholder from "./PlaceHolder"

function Notes({notes, updateNote, handleMouseOver, handleMouseOut, handleDelete}) {

    const [modalClass, setModalClass] = useState("")
    const [modalNote, setModalNote] = useState({})   

    const displayNotes = notes.map((note) => {
        return (
            <Note
                key={note.id}
                note={note}
                openModal={openModal}
                handleMouseOver={handleMouseOver}
                handleMouseOut={handleMouseOut}
                handleDelete={handleDelete}
            />
        )
    })


    function openModal(id) {
        setModalClass("open-modal")
        const [note] = notes.filter(note => note.id === id)
        setModalNote(note)
    }

    function handleModelNoteChange(event) {
        const {name, value} = event.target
        setModalNote(prev => ( {...prev, [name]: value} ))
    }
    
    function closeModal() {
        updateNote(modalNote)
        setModalClass("")
    }

    return (
        <>
            {modalClass !== "" ?
            <Modal
                modalClass={modalClass}
                modalNote={modalNote}
                closeModal={closeModal}
                handleModelNoteChange={handleModelNoteChange}
            /> :
            null}

            <div id="notes">
                {displayNotes}
            </div>
            {notes.length === 0 ? <Placeholder/> : null}
        </>
    )
}

export default Notes