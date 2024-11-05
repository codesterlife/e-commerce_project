import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Register = (props) => {
    var [inputs,setInputs]=useState({Name:"",Email:"",Password:"",ConPassword:""})
    var location=useLocation()
    var navigate=useNavigate()
    console.log(location.state)
    const inputHandler=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
    }
    const addHandler = () => {
        console.log("clicked")
        if (inputs.ConPassword !==inputs.Password){
            alert("Confirm Password and Password are same")}
        else{
           axios.post("http://localhost:3005/sign", inputs)
             .then((res) => {
               console.log(res)
               alert(res.data.message)
             })
             .catch((err) => { console.log(err) })
         }}
       
       
       useEffect(() => {
         if (location.state!==null)
         setInputs({
           ...inputs,
           Name: location.state.val.Name,
           Email: location.state.val.Email,
           Password: location.state.val.Password,
           ConPassword:location.state.val.ConPassword
           
         })
       }), []
       
    return (
        <div>
          <Box sx={{width: '300px', margin: '50px auto'}}>
          <Typography variant='h4' sx={{ fontFamily: 'fantasy', margin: '10px'}}>
        Sign Up
      </Typography>
            <TextField
                label="Enter username"
                variant="outlined"
                value={inputs.Name} onChange={inputHandler} name="Name"
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    }
                }}
                sx={{ backgroundColor: '#fdfdfd'}}
            /><br /><br />
            <TextField label="Enter email" variant='outlined' slotProps={{
                inputLabel: {
                    shrink: true,
                }
            }} value={inputs.Email} onChange={inputHandler} name="Email"
            sx={{ backgroundColor: '#fdfdfd'}}/><br /><br />
            <TextField label="Enter password" variant='outlined' slotProps={{
                inputLabel: {
                    shrink: true,
                }
            }} 
            value={inputs.Password} onChange={inputHandler} name="Password"
            sx={{ backgroundColor: '#fdfdfd'}}/><br /><br />
            <TextField label="Confirm Password" variant='outlined' slotProps={{
                inputLabel: {
                    shrink: true,
                }
            }} 
            value={inputs.ConPassword} onChange={inputHandler} name="ConPassword"
            sx={{ backgroundColor: '#fdfdfd'}}/><br /><br />
            <Button variant='contained' color='success' onClick={addHandler}>Sign up</Button>
            </Box>
        </div>
    )
}

export default Register
