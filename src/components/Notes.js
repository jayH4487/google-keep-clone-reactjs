import React from "react"
import Note from "./Note"

function Notes(props) {
    const displayNotes = props.notes.map((note) => <Note note={note}/>)

    const placeholder = props.notes.length === 0 ?
        <div id="placeholder">
            <img
                id="placeholder-logo"
                src="https://icon.now.sh/lightbulb_outline"
                alt=""
            />
            <p id="placeholder-text">Notes you add appear here</p>
        </div>
        : null

    return (
        <>
            <div id="notes">
                {displayNotes}
            </div>
            {placeholder}
        </>
    )
}

export default Notes