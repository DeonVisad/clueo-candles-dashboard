import React from 'react';
import './Body.css';
import Top from './Top_Section/Top';
import Listing from './Listing_Section/Listing';
import Activity from './Activity_Section/Activity';

const Body = () => {
  return (
    <div className='mainContainer'>
        <Top />

        <div className='bottom flex'>
            <Listing />
            <Activity />
        </div>
    </div>
  )
}

export default Body;