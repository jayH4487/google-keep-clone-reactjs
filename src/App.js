import React, {useState} from "react"
import Header from "./components/Header"
import FormContainer from "./components/FormContainer"
import Notes from "./components/Notes"



function App() {

    const [notes, setNotes] = useState([])
    


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


    return (
        <main>
            

            <Header/>
            <FormContainer
                addNote={addNote}
            />
            <Notes
                notes={notes}
                updateNote={updateNote}
            />
        </main>
    )
}

export default App
