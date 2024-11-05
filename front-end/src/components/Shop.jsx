import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete'

const Shop = () => {
  var [prod, setprod] = useState([]);
  axios.get("http://localhost:3005/view")
      .then((res) => {
          console.log(res)
          setprod(res.data)
  })
  const delvalue = (id) => {
    console.log("clicked")
    console.log(id)

    axios.delete("http://localhost:3005/remove/" + id)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Typography variant='h1' sx={{ fontFamily: 'fantasy', width: '100%', textAlign:'center', mt: '10%'}}>
        Welcome to Products Page
      </Typography>
     <Grid container spacing={2}>
  {prod.map((val)=>{
      return (  
          <Grid item xs={12} sm={4} md={6} >   
  <Card sx={{ maxWidth: 345 }}>
  <CardMedia
      sx={{height:140}}
      image={val.image}
      title={val.title}
  />
  <CardContent>
      <Typography gutterBottom variant="h5" component="div">
     {val.Name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {val.Category}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                         Price = {val.Price}
      </Typography><br/>
      <Link to='/cart'>
                  <Button variant="contained" color="error">Add to cart</Button>
              </Link>&nbsp;&nbsp;
              
              <Link to='/payment'>
                  <Button variant="contained" color="error">Buy Now</Button>
              </Link><br/><br/>
              &nbsp;&nbsp;<Button variant="text" color="error"  onClick={() => {
                                          delvalue(val._id)
                                      }}><DeleteIcon /></Button>&nbsp;&nbsp;

  </CardContent>
  
      </Card>
          </Grid>
      )
  })}
  </Grid>
  </>
  )
}

export default Shop