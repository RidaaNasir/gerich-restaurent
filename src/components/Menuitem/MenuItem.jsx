import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__menuItem'>

    <div className='app__menuItem-head'>
      <div className='app__menuItem-name'>
        <p className='p__cormorant' style={{color: '#BCCA87'}}>{title}</p>
      </div>

      <div className='app__menuItem-price'>
        <p className='p__cormorant' >{price}</p>
      </div>


    </div>
  </div>
);

export default MenuItem;
