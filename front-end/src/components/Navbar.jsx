import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'fantasy' }}>
            E-COM Store
          </Typography>
          <Link to="/">
            {/* <Button color='warning' variant='contained'>Home</Button> */}
            <Button variant="text" ><HomeIcon sx={{ color: 'white' }} /></Button>
          </Link>
          <Link to="/log">
          <Button variant="text" ><LoginIcon sx={{ color: 'white' }}/></Button>
          </Link>
          <Link to='/cart'>
          <Button variant="text"><ShoppingCartIcon sx={{ color: 'white' }}  /></Button>
          </Link>
          <Link to='/add'>
          <Button variant="text"><AddIcon sx={{ color: 'white' }} /></Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}