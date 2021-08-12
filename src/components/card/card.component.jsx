import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='patra'
      src={`https://robohash.org/${props.patra.id}?set=set2&size=180x180`}
    />
    <h2> {props.patra.name} </h2>
    <p> {props.patra.email} </p>
  </div>
);