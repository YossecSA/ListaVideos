import React from 'react'

export const Thumbnail = ({imagen}) => {
    return (
        <>
            <video controls  poster={imagen}>
                <source src="video.mp4" type="video/mp4" />
            </video>
        </>
    );
}
