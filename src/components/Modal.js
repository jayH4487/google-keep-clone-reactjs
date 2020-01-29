import React from "react"

function Modal({modalClass, modalNote, closeModal, handleModelNoteChange}) {
 
    return (
        <div className={`modal ${modalClass}`}>
            <div className="modal-content">
                <input
                    name="title"
                    className="modal-title"
                    placeholder="Title"
                    type= "text"
                    onChange={handleModelNoteChange}
                    value={modalNote.title}
                    />
                <input
                    name="text"
                    className="modal-text"
                    placeholder="Take a note..."
                    type="text"
                    onChange={handleModelNoteChange}
                    value={modalNote.text}
                />   
                <span
                    className="modal-close-button"
                    onClick={closeModal}
                >Close</span>
            </div>
        </div>
    )
}

export default Modal