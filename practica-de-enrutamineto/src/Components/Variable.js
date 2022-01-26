import React from 'react'

export const Variable = ({text,colorText,backColor}) => {
    const divStyle = {
        color:colorText,
        backgroundColor:backColor
    }
    return (
        <div style={divStyle}>
            {text} 
        </div>
    )
}
