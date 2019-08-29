import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';

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
