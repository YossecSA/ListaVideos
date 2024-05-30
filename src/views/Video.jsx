import React from 'react'
import { Thumbnail } from '../components/Thumbnail'
import { LikeButton } from '../components/LikeButton'

export const Video = ({ infoVideo }) => {

    const {id, titulo, descripcion, imagen, ruta_video } = infoVideo

    return (
        <div className='carta'>
            <Thumbnail imagen={imagen}/>
            <a className='video_info' href={ruta_video}  target="_blank">
                <h3 className='video_titulo'>{titulo}</h3>
                <p> {descripcion} </p>
            </a>
            <LikeButton />
        </div>
    )
}
