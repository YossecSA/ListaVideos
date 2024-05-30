import React from 'react'
import { useState } from 'react'

export const LikeButton = ({ videoCode }) => {
    const [estado, setestado] = useState(false)

    function handleState() {
        setestado(!estado);
    }

    return (
        <button onClick={handleState}>
            <Icon estado={estado} />
            
        </button>
    )
}

function Icon({ estado }) {
    return estado ? <i className='bx bxs-heart bx-burst color'></i>: <i className='bx bx-heart'></i>;
}