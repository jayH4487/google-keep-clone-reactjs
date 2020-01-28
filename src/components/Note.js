import React from "react"

function Note({note}) {
    return (
        <>
            <div style={{background: note.color}} class="note">
                <div class={note.title && "note-title"}>{note.title}</div>
                <div class="note-text">{note.text}</div>
                <div class="toolbar-container">
                    <div class="toolbar">
                        <img class="toolbar-color" src="https://icon.now.sh/palette"/>
                        <img class="toolbar-delete" src="https://icon.now.sh/delete"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note