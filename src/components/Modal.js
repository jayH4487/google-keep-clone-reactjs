import React from "react"

function Modal({modalClass, modalNote, closeModal}) {
    return (
        <div className={`modal ${modalClass}`}>
            <div className="modal-content">
                <input
                    className="modal-title"
                    placeholder="Title"
                    type= "text"
                    value={modalNote.title}
                    />
                <input
                    className="modal-text"
                    placeholder="Take a note..."
                    type="text"
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