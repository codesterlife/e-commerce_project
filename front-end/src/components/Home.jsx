import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Home = () => {
  return (
    <>
    <Box sx={{width: '1000px', margin: '0 auto', display: "flex", flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant='h1' sx={{ fontFamily: 'fantasy', width: '100%', textAlign:'center', mt: '10%'}}>
          Welcome to E-COM Store.
      </Typography>&nbsp;
      <div><TextField id="outlined-basic" label="Search" variant="outlined" size="small"/><Button variant="contained"size="large" color='success' ><SearchOutlinedIcon sx={{ color:'white'}} /></Button></div>
      <Link to="/shop"><br/><br/>
        <Button color="success" variant='contained' sx={{width: "150px"}}>Products</Button>
      </Link>
        </Box>
    </>
  )
}

export default Home