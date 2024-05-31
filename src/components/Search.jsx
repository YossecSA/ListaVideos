import React from 'react'
import '../search.css'
import { useState } from 'react'


export const Search = ({ agregarTarea }) => {

    const [texto, setTexto] = useState('')

    const handleChange = (evento) => {
        const newTexto = evento.target.value;
        setTexto(newTexto);
        agregarTarea(newTexto); 
    }

    return (
        <div className='input_container'>
            <div className='container_icon'>
                <i className='bx bx-search-alt'></i>
            </div>
            <input 
                type='text' 
                placeholder='Buscar' 
                onChange={handleChange} 
                value={texto}
            />
        </div>
    )
}
