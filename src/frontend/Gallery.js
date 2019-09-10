import React, { useEffect, useState } from 'react';
import MovieCovers from './MovieCovers';
//import getGallery from './gallery-get';
import aquaman from './images/aquaman.jpg';


export default function Gallery() {
  const [gallery, setGallery] = useState([]);
    useEffect(() => {
      fetch('/rest/shows')
        .then(response => response.json())
        .then(backendGallery => setGallery(backendGallery))
        .catch(() => console.log('err'))

    }, [])
  return (
  <div>
     <div className='mainCover'>
        <img src={aquaman} className='hero' alt='Aquaman Cover' />
     </div>
      <div className='container'>
       {
         gallery.map(movieCovers => (
           <MovieCovers
           key={movieCovers.id}
           id={movieCovers.id}
           name={movieCovers.name}
           cover={movieCovers.cover} />
         ))
       }
      </div>
  </div>
  );

}
