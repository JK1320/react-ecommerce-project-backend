import React from 'react';
import {Link} from 'react-router-dom';

const Success = () => {
  return (
    <div className='success-btn-container'>
      <Link to="/pay">
      Successful.
      </Link>
        
        <p>Your order is being prepared. Thanks for choosing Lama Shop.</p>
    </div>
  )
}

export default Success;