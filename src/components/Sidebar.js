import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import './Sidebar.css';

function Sidebar(){

  return (

    <>

    <nav className = "navMenu">
      <ul className = "menuitems">
        {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                  </Link>
                </li>
              );
            })}
      </ul>
    </nav>
    </>
  )
}

export default Sidebar;
