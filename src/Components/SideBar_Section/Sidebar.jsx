import React from 'react';
import './Sidebar.css';

import img from '../../Assets/CLUEO HUGE.png'

import { BsQuestionCircle, BsPatchQuestion, BsSpeedometer } from 'react-icons/bs';
import {MdOutlineInventory2} from 'react-icons/md';
import {AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai';
import {VscAccount} from 'react-icons/vsc';


const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={img} alt='image name'/>
        {/* <h2>Clueo.</h2> */}
      </div>
      
      <div className='menuDiv'>
        <h3 className='divTitle'>Quick Menu</h3>
        <ul className='menuList grid'>

          <li className='listItem'>
            <a href='#' className='flex menuLink'>
              <BsSpeedometer className='icon' />
              <span>Dashboard</span>
            </a>
          </li>
          
          <li className='listItem'>
            <a href='#' className='flex menuLink'>
              <MdOutlineInventory2 className='icon' />
              <span>Inventory</span>
            </a>
          </li>
          
          <li className='listItem'>
            <a href='#' className='flex menuLink'>
              <AiOutlineShoppingCart className='icon' />
              <span>Orders</span>
            </a>
          </li>
          
          <li className='listItem'>
            <a href='#' className='flex menuLink'>
              <BsPatchQuestion className='icon' />
              <span>FAQ</span>
            </a>
          </li>
          
        </ul>
      </div>

      <div className='settingsDiv'>
      <h3 className='divTitle'>Settings</h3>
        <ul className='menuList grid'>
        <li className='listItem'>
            <a href='#' className='flex menuLink'>
              <VscAccount className='icon' />
              <span>Account</span>
            </a>
          </li>
          
          <li className='listItem'>
            <a href='#' className='flex menuLink'>
              <AiOutlineSetting className='icon' />
              <span>Preferences</span>
            </a>
          </li> 
          
          <li className='listItem'>
            <a href='#' className='flex menuLink'>
              <AiOutlineShoppingCart className='icon' />
              <span>Manage Orders</span>
            </a>
          </li>
        </ul>
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
  )
}

export default Sidebar;