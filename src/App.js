import React, {useState, useEffect} from "react"
import Header from "./components/Header"
import FormContainer from "./components/FormContainer"
import Notes from "./components/Notes"
import ColorToolTip from "./components/ColorToolTip"


function App() {

    const [notes, setNotes] = useState([])
    const [showColorToolTip, setShowColorToolTip] = useState(false)
    const [colorToolTipPosition, setColorToolTipPosition] = useState({})
    const [colorNoteId, setColorNoteId] = useState(0)


    function addNote(note) {
        setNotes(prev => {
            const id = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1
            const noteWithId = {...note, id}
            return [...prev, noteWithId]
        })
    }

    function updateNote(amendedNote) {
        setNotes(prev => {
            return prev.map(note => note.id !== amendedNote.id ? note : amendedNote)
        })
    }

    function handleDelete(event, id) {
        event.stopPropagation()
        setNotes(prev => {
            return prev.filter(note => note.id !== id)
        })
    }

    function handleMouseOver(event, id) {
        const noteCoords = event.target.getBoundingClientRect()
        const horizontal = noteCoords.left + window.scrollX - 5
        const vertical = noteCoords.top + window.scrollY - 5
        setColorToolTipPosition(() => ({horizontal, vertical}))
        setColorNoteId(id)
        setShowColorToolTip(true)
    }


    function handleColorLeave(event) {
        setShowColorToolTip(false)
    }

    function handleColorClick(event) {
        if (!event.target.matches('.color-option')) return
        const color = event.target.dataset.color
        setNotes(prev => {
            return prev.map(note => note.id === colorNoteId ? {...note, color} : note)
        })
        setShowColorToolTip(false)

    }

    useEffect(() => {
        const notesFromStorage = JSON.parse(localStorage.getItem("notes")) || []
        setNotes(notesFromStorage)
    }, [])

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])


    return (
        <main>
            <Header/>
            <FormContainer
                addNote={addNote}
                />
            <Notes
                notes={notes}
                updateNote={updateNote}
                handleMouseOver={handleMouseOver}
                handleDelete={handleDelete}
                />

            {showColorToolTip ?
            <ColorToolTip
                colorToolTipPosition={colorToolTipPosition}
                handleColorLeave={handleColorLeave}
                handleColorClick={handleColorClick}
            /> : null}
        </main>
    )
}

export default App
