import React, {useState} from "react"

const FormContainer = React.forwardRef((props,ref) => {

    const [note, setNote] = useState({
        title: "",
        text: "",
        color: "white",
        id: 0
    })

    const formOpen = props.isFormClicked ? "form-open" : ""
    const inputStyle = props.isFormClicked ? {display: "block"} : {display: "none"}

    function handleSubmit(event) {
        event.preventDefault()

        if (note.title || note.text) {
            props.addNote(note)
        }

        setNote((prev => ( {...prev, title: "", text: ""} )))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setNote((prev) => ( {...prev, [name]: value} ))
    }
    

    return (
        <div id="form-container">
            <form
                ref={ref}
                id="form"
                autoComplete="off"
                className={formOpen}
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
                <div id="form-buttons" style={inputStyle}>
                    <button type="submit" id="submit-button">Submit</button> 
                    <button type="button" id="form-close-button">Close</button> 
                </div>  
            </form> 
        </div>
    )
})

export default FormContainer