import React from 'react';
import './Activity.css';

import {BsArrowRightShort} from 'react-icons/bs';

import person1 from '../../../Assets/person1.avif';
import person2 from '../../../Assets/person2.avif';
import person3 from '../../../Assets/person3.avif';
import person4 from '../../../Assets/person4.avif';

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort />
        </button>
      </div>

      <div className='secContainer grid'>
        <div className='singleCustomer flex'>
          <img src={person1} alt='customer image' />
          <div className='customerDetails'>
            <span className='name'>Jennifer H.</span>
            <small>Ordered a new candle</small>
          </div>
          <div className='duration'>4mins ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={person2} alt='customer image' />
          <div className='customerDetails'>
            <span className='name'>Jennifer H.</span>
            <small>Ordered a new candle</small>
          </div>
          <div className='duration'>4mins ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={person3} alt='customer image' />
          <div className='customerDetails'>
            <span className='name'>Jennifer H.</span>
            <small>Ordered a new candle</small>
          </div>
          <div className='duration'>4mins ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={person4} alt='customer image' />
          <div className='customerDetails'>
            <span className='name'>Jennifer H.</span>
            <small>Ordered a new candle</small>
          </div>
          <div className='duration'>4mins ago</div>
        </div>
        
      </div>
    </div>
  )
}

export default Activity