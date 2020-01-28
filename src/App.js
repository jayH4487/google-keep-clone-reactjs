import React, {useEffect, useRef, useState} from 'react'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import Notes from './components/Notes'


function App() {
    const [isFormClicked, setIsFormClicked] = useState(false)
    const [notes, setNotes] = useState([])
    const formRef = useRef(null)

    function handleFormClick(e) {
        formRef.current.contains(e.target) ?
        setIsFormClicked(true) : 
        setIsFormClicked(false)
  }

    function addNote(note) {
        setNotes(prev => {
            const id = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1
            const noteWithId = {...note, id}
            return [...prev, noteWithId]
        })
  }

    useEffect(() => {
        document.body.addEventListener("click", handleFormClick)
    
        return () => document.body.removeEventListener("click", handleFormClick
    )
    }, [])

    console.log(notes)
    return (
        <main>
            <Header/>
            <FormContainer
                ref={formRef}
                isFormClicked={isFormClicked}
                addNote={addNote}
            />
            <Notes
                notes={notes}
            />
        </main>
    )
}

export default App
