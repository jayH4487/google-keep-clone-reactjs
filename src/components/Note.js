import React from "react"


function Note({note, openModal, handleMouseOver, handleDelete}) {

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
                        <i
                            className="toolbar-color fas fa-palette"
                            onMouseOver={(event) => handleMouseOver(event, note.id)}
                            />
                        <i
                            className="toolbar-delete fas fa-trash-alt"
                            onClick={(event) => handleDelete(event, note.id)}
                        />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Note