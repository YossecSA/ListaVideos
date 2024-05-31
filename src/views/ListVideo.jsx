import React from 'react'
import { Video } from './Video'
import { Search } from '../components/Search';
import { useState } from 'react';

export const ListVideo = ( { listVideo, txtHeading } ) => {

    //lista de videos
    const [dataVideo, setDataVideo] = useState(listVideo)

    const cantidad = dataVideo.length;

    if( cantidad > 0 ){
        const cant = cantidad > 1 ? 'Videos' :'Video';
        txtHeading = `${cantidad} ${cant} `
    }

    const onValueInput = (val) =>{
        console.log(val);

        const lowerCaseVal = val.toLowerCase();
        const filteredVideos = listVideo.filter(video => video.titulo.toLowerCase().includes(lowerCaseVal));

        setDataVideo(filteredVideos);
    }

    return (
        <section>
            <Search agregarTarea={onValueInput} />
            <h2> {txtHeading} </h2>
            {
                dataVideo.map( info =>
                    <Video infoVideo={info} />
                )
            }
        </section>
    )
}
