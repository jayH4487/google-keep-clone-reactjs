import React from "react"

function Note({note, openModal}) {

    return (
        <>
            <div
                style={{background: note.color}}
                className="note"
                onClick={() => openModal(note.id)}
            >
                <div className={note.title && "note-title"}>{note.title}</div>
                <div className="note-text">{note.text}</div>
                <div className="toolbar-container">
                    <div className="toolbar">
                        <img
                            className="toolbar-color"
                            src="https://icon.now.sh/palette" alt=""
                        />
                        <img
                            className="toolbar-delete"
                            src="https://icon.now.sh/delete" alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note