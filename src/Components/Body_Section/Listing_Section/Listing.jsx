import React from 'react';
import './Listing.css';

import {BsArrowRightShort} from 'react-icons/bs';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

import datenight from '../../../Assets/datenight.JPG';
import forest from '../../../Assets/forest.JPG';
import goldenhour from '../../../Assets/goldenhour.JPG';
import oceanmist from '../../../Assets/oceanmist.JPG';

import person1 from '../../../Assets/person1.avif';
import person2 from '../../../Assets/person2.avif';
import person3 from '../../../Assets/person3.avif';
import person4 from '../../../Assets/person4.avif';


const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </button>

      </div>

      <div className='secContainer flex'>
        
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={datenight} alt='Candle Scent Date Night' />
          <h3>Date Night</h3>
        </div>

        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={forest} alt='Candle Scent Forest Grove' />
          <h3>Forest Grove</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={goldenhour} alt='Candle Scent Golden Hour' />
          <h3>Golden Hour</h3>
        </div>

        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={oceanmist} alt='Candle Scent Ocean Mist' />
          <h3>Ocean Mist</h3>
        </div>

      </div>

      <div className='sellers flex'>
        <div className='topSellers'>
          <div className='heading flex'>
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={person2} alt='user 2' />
            </div>
            <div className='users'>
              <img src={person3} alt='user 3' />
            </div>
            <div className='users'>
              <img src={person4} alt='user 4' />
            </div>
            <div className='users'>
              <img src={person1} alt='user 1' />
            </div>
            <div className='cardText'>
              <span>
                1,342 Candles sold <br/>
                <small>17 Sellers <span className='date'>7 Days</span></small>
              </span>
            </div>
          </div>
        </div>
        <div className='featuredSellers'>
          <div className='heading flex'>
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon' />
            </button>
          </div>

          <div className='card flex'>
            <div className='users'>
              <img src={person1} alt='user 1' />
            </div>
            <div className='cardText'>
              <span>
                1,342 Candles sold <br/>
                <small>17 Sellers <span className='date'>7 Days</span></small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing;