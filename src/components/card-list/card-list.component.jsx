
import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.patras.map(patra => (
      <Card key={patra.id} patra={patra} />
    ))}
  </div>
);