import React from 'react';
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, IconButton } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Header = () => {
    return (
        <div className="header">
        <div className="header__left">
        <IconButton>
         <MenuIcon />
         </IconButton>
         <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="" />
        </div>

        <div className="header__middle">
        <SearchIcon />
        <input placeholder='Search Mail' type="text" />
        <ArrowDropDownIcon className='header__inputCarret' />
        </div>

        <div className="header__right">
        <IconButton>
            <AppsIcon />
        </IconButton>
        <IconButton>
            <NotificationsIcon />
        </IconButton>
        <Avatar />
        </div>
        </div>
    );
}

export default Header;
