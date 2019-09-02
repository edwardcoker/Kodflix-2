import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCovers(props) {
  return (
    <Link to={`/${props.id}`} className='item'>
          <img src={props.cover} alt={`${props.name} movie cover`} />
          <div className='overlay'>
            <h1>{props.name}</h1>
        </div>
      </Link>
  );
}
