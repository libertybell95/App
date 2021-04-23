import React, {useState} from 'react';
import {AiFillHome} from 'react-icons/ai';
import {AiOutlinePoweroff} from 'react-icons/ai';
import {ImFolderUpload} from 'react-icons/im';
import {GoGraph} from 'react-icons/go';
import {GrPowerShutdown} from 'react-icons/gr';
import {FiSettings} from 'react-icons/fi';



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome className = "icon"/>,
    className: 'nav-text'
  },
  {
    title: 'Upload',
    path: '/Upload',
    icon: <ImFolderUpload className = "icon"/>,
    className: 'nav-text'
  },
  {
    title: 'Results',
    path: '/Results',
    icon: <GoGraph className = "icon"/>,
    className: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: <FiSettings className = "icon"/>,
    className: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/Logout',
    icon: <AiOutlinePoweroff className = "icon"/>,
    className: 'nav-text'
  }
];
