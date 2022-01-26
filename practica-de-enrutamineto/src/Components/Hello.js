import React from 'react'

export const Hello = ({word}) => {
    return (
        
        <div>
            
            {
                isNaN(+word) ? `The Word is: ${word}`: `The number is: ${word}`
            }
             
        </div>
    )
}
