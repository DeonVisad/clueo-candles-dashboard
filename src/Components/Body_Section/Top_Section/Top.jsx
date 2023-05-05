import React from 'react';
import './Top.css';
import candles from '../../../Assets/candles2.mp4';
import person2 from '../../../Assets/person2.avif';

// ICONS ---->
import {BiSearchAlt} from 'react-icons/bi';
import {TbMessageDots} from 'react-icons/tb';
import {MdNotificationsNone} from 'react-icons/md';
import {BsQuestionCircle} from 'react-icons/bs'

const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Welcome to Clueo.</h1>
          <p>Hello Guest, Welcome back!</p>
        </div>

        <div className='searchBar flex'>
          <input type='text' placeholder='search' />
          <BiSearchAlt className='icon' />
        </div>

        <div className='adminDiv flex'>
          <TbMessageDots className='icon' />
          <MdNotificationsNone className='icon' />
          <div className='adminImage'>
            <img src={person2} alt='admin' />
          </div>
        </div>
      </div>

      <div className='cardSection flex'>
        <div className='rightCard flex'>
          <h1>Sell clean and amazing products</h1>
          <p>Sensory products are always in need, that's why they need to be all natural!</p>

          <div className='buttons flex'>
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>

          <div className='videoDiv'>
            <video src={candles} alt="video of candles" autoplay loop muted></video>
          </div>
        </div>

        <div className='leftCard flex'>
          <div className='main flex'>
            <div className='textDiv'>
              <h1>My Stats</h1>

              <div className='flex'>
                <span>
                  Today <br/> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>175 Orders</small>
                </span>
              </div>

              <span className='flex link'>
                Go to my orders 
              </span>
            </div>

            <div className='imgDiv'>
              <img alt='' src=''/>
            </div>

          <div className='sideBarCard'>
              <BsQuestionCircle className="icon" />
              <div className='cardContent'>
                <div className='circle1'></div>
                <div className='circle1'></div>

                <h3>Help Center</h3>
                <p>Having trouble with Clueo, please contact us from here for more questions.</p>
                <button className='btn'>Go to help center</button>
              </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Top;