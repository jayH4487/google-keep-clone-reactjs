import React, {useState, useRef, useEffect} from "react"

function FormContainer({addNote}) {

    const [isFormClicked, setIsFormClicked] = useState(false)
    const [note, setNote] = useState({
        title: "",
        text: "",
        color: "white",
        id: 0
    })
    const formRef = useRef(null)

    const inputStyle = isFormClicked ? {display: "block"} : {display: "none"}

    function handleFormClick(event) {
        if (formRef.current.contains(event.target)) {
            setIsFormClicked(true)
        } else if (note.title || note.text) {
            addNote(note)
            closeForm()
        } else {
            setIsFormClicked(false)
        }
  }

    function handleSubmit(event) {
        event.preventDefault()

        if (note.title || note.text) {
            addNote(note)
            closeForm()
        }
    }

    function handleChange(event) {
        const {name, value} = event.target
        setNote((prev) => ( {...prev, [name]: value} ))
    }

    function closeForm() {
        setNote((prev => ( {...prev, title: "", text: ""} )))
        setIsFormClicked(false)
    }

    useEffect(() => {
        document.body.addEventListener("click", handleFormClick)
    
        return () => document.body.removeEventListener("click", handleFormClick)
    }, [note])
    

    return (
        <div id="form-container">
            <form
                ref={formRef}
                id="form"
                autoComplete="off"
                className={isFormClicked ? "form-open" : ""}
                onSubmit={handleSubmit}
            >
                <input
                    name="title"
                    id="note-title"
                    placeholder="Title"
                    type="text"
                    style={inputStyle}
                    onChange={handleChange}
                    value={note.title}
                />
                <input
                    name="text"
                    id="note-text"
                    placeholder="Take a note..."
                    type="text"
                    onChange={handleChange}
                    value={note.text}
                /> 
                <div
                    id="form-buttons"
                    style={inputStyle}
                >
                    <button
                        type="submit"
                        id="submit-button"
                    >Submit</button>

                    <button
                        type="button"
                        id="form-close-button"
                        onClick={closeForm}
                    >Close</button>

                </div>  
            </form> 
        </div>
    )
}

export default FormContainer