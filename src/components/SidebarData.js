import React, {useState} from 'react';
import {AiFillHome} from 'react-icons/ai';
import {AiOutlinePoweroff} from 'react-icons/ai';
import {ImFolderUpload} from 'react-icons/im';
import {GoGraph} from 'react-icons/go';
import {GrPowerShutdown} from 'react-icons/gr';

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
    title: 'Logout',
    path: '/Logout',
    icon: <AiOutlinePoweroff className = "icon"/>,
    className: 'nav-text'
  }
];
