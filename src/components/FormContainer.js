import React from "react"

const FormContainer = React.forwardRef((props,ref) => {

    const formOpen = props.isFormClicked ? "form-open" : ""
    const inputStyle = props.isFormClicked ? {display: "block"} : {display: "none"}

    return (
        <div id="form-container">
            <form ref={ref} id="form" autoComplete="off" className={formOpen}>
                 <input id="note-title" placeholder="Title" type="text" style={inputStyle}/>
                 <input id="note-text" placeholder="Take a note..." type="text"/> 
                 <div id="form-buttons" style={inputStyle}>
                    <button type="submit" id="submit-button">Submit</button> 
                    <button type="button" id="form-close-button">Close</button> 
                 </div>
              </form> 
        </div>
    )
})

export default FormContainer