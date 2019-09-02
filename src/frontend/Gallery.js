import React from 'react';
import MovieCovers from './MovieCovers';
import getGallery from './gallery-get';
import aquaman from './images/aquaman.jpg';


export default function Gallery() {
  return (
  <div>
     <div className='mainCover'>
        <img src={aquaman} className='hero' alt='Aquaman Cover' />
     </div>
      <div className='container'>
       {
         getGallery().map(movieCovers => (
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
