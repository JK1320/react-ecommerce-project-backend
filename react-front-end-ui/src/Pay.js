import React from 'react';
import {Link} from 'react-router.dom';

const Pay = () => {
  return (
    <div className='pay-btn-container'>
        <Link to="/success">
           Pay Now
        </Link>
    </div>
  )
}

export default Pay;