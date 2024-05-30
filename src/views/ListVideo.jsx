import React from 'react'
import { Video } from './Video'

export const ListVideo = ( { listVideo, txtHeading } ) => {

    const cantidad = listVideo.length;

    if( cantidad > 0 ){
        const cant = cantidad > 1 ? 'Videos' :'Video';
        txtHeading = `${cantidad} ${cant} `
    }

    return (
        <section>
            <h2> {txtHeading} </h2>
            {
                listVideo.map( info =>
                    <Video infoVideo={info} />
                )
            }
        </section>
    )
}
