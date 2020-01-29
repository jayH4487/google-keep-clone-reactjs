import React, {useState} from "react"
import Header from "./components/Header"
import FormContainer from "./components/FormContainer"
import Notes from "./components/Notes"
import ColorToolTip from "./components/ColorToolTip"


function App() {

    const [notes, setNotes] = useState([
        {
            title: "title1",
            text: "text1",
            color: "white",
            id: 1
        },
        {
            title: "title2",
            text: "text2",
            color: "white",
            id: 2
        }
    ])
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
        const horizontal = noteCoords.left + window.scrollX
        const vertical = 0 - 25
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
