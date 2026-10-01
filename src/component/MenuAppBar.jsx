import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { green, grey } from '@mui/material/colors';
//LINk nave
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';



export default function MenuAppBar() {
   const themecart = createTheme({
        palette: {
            primary: {
                main: '#606366', 
            },
            secondary: {
                main: '#9c140b', 
            },
            card : {
              main : '#aaabb3'
            }
        },
        typography: {
            fontFamily: 'Roboto', 
        },
    });
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <ThemeProvider theme={themecart}>
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
        
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              page
            </Typography>
            <Link to="/cart" underline="none"> <ShoppingCartIcon color='card'/> </Link>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
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
                  <Link to="/Profile" ><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                  <Link to="/Home" underline="none"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                  {/* <Link to="/Account" underline="none"><MenuItem onClick={handleClose}>My account</MenuItem></Link> */}
                  <Link to="/SignUp" underline="none"><MenuItem onClick={handleClose}>Sign Up</MenuItem></Link>
                  <Link to="/Login" underline="none"><MenuItem onClick={handleClose}>Login</MenuItem></Link>
                  {/* <Link to="/AlertVariousStates" underline="none"><MenuItem onClick={handleClose}>Alert</MenuItem></Link> */}

                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
