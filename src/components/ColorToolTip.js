import React from "react"

function ColorToolTip({colorToolTipPosition, handleColorLeave, handleColorClick}) {


    return (
        <div
            id="color-tooltip"
            style={ {display: "flex", transform: `translate(${colorToolTipPosition.horizontal}px, ${colorToolTipPosition.vertical}px)`} }
            onMouseLeave={handleColorLeave}
            onClick={handleColorClick}
        >
            <div className="color-option" data-color="#fff" id="white"></div>
            <div className="color-option" data-color="#d7aefb" id="purple"></div>
            <div className="color-option" data-color="#fbbc04" id="orange"></div>
            <div className="color-option" data-color="#a7ffeb" id="teal"></div>
        </div>
    )
}

export default ColorToolTip