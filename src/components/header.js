import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import { setAccount, getAccount } from "./account";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Header({setUser}) {
  const user = getAccount();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  function handleCallBackResponse(response) {
    const userObject = jwtDecode(response.credential);
    setUser(userObject)
    setAccount(userObject);
  }

  const errorMessage = (error) => {
    console.log(error);
  };

  const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/')
    setAnchorEl(null);
    setUser(null)
    setAccount(null)
  }

    return (
      <div className="navbar">
        <Link to='/' className="logo">Vendor Vista</Link>
        {user?
          <div className="menu">
            <div>{user.name}</div>
            <IconButton
              sx={{marginLeft: '0.5rem'}}
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt={user.name} src={user.picture} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>:
          <div className="desktop" ><GoogleLogin onSuccess={handleCallBackResponse} onError={errorMessage} type="icon" shape="circle" size="large" /></div>
        }
      </div>
    )
}