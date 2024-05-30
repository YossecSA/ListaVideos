class Video  {
    constructor(id,titulo, descripcion, ruta_video, imagen) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion; 
        this.ruta_video = ruta_video; 
        this.imagen = imagen; 
    }
}

const videos = [
    new Video(
        1,
        'React: The Documentary',
        'The origin story of React',
        'https://youtu.be/Tk5LG9jb5mk?list=RDTk5LG9jb5mk',
        'https://cdn.lifeofpix.com/368789/_w1800/368795/lifeofpix-368789368795.webp'
    ),
    new Video(
        2,
        'Rethinking Best Practices',
        'Pete Hunt (2013)',
        'https://youtu.be/ISKwApr2Zw0?list=RDTk5LG9jb5mk',
        'https://cdn.lifeofpix.com/368789/_w1800/368792/lifeofpix-368789368792.webp'
    ),
    new Video(
        3,
        'Introducing React Native',
        'Tom Occhino (2015)',
        'https://youtu.be/AyFDKq69w3c?list=RDTk5LG9jb5mk',
        'https://cdn.lifeofpix.com/368587/_w1800/368616/lifeofpix-368587368616.webp'
    ),
    new Video(
        4,
        'Introducing React Hooks',
        'Sophie Alpert and Dan Abramov (2018)',
        'https://youtu.be/hwysRYnNhTM?list=RDTk5LG9jb5mk',
        'https://cdn.lifeofpix.com/368492/_w1800/368506/lifeofpix-368492368506.webp'
    )
];

export { videos }