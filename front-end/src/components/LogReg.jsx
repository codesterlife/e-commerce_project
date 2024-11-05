
import React, { useEffect, useState } from 'react'
import {  Box, Button, TextField, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogReg = (props) => {
   const[isSignup,setIsSignup]= useState(false)
  console.log(isSignup)
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
        <form>
            <Box display={'flex'} flexDirection={'column'} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin={'auto'} marginTop={5} padding={3}
            borderRadius={5} boxShadow={"5px 5px 10px #ccc"}
            sx={{":hover":{boxShadow:"10px 10px 20px #ccc",},}}>
       <Typography variant='h2' padding={3} textAlign={'center'}>{isSignup ?"Singup" :"Login"} 
       </Typography>
       <TextField
          requiredmargin="normal"
         id="outlined-required"
          label="Name"
          color='success' focused
          defaultValue=""
           helperText="Please enter your name"
          value={inputs.Name} onChange={inputHandler} name="Name"
        />
       {isSignup && <TextField
        margin="normal"
        id="outlined-required"
        label="Email"
        color='success' focused
        defaultValue=""
        helperText="Please enter your email"
        value={inputs.Email} onChange={inputHandler} name="Email"
 />}
      <TextField
      margin="normal"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          color='success' focused
          helperText="Please enter your password"
          value={inputs.Password} onChange={inputHandler} name="Password"
        />
       {isSignup && <TextField
      margin="normal"
          id="outlined-conpassword-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          color='success' focused
          helperText="Please confirm password"
           value={inputs.ConPassword} onChange={inputHandler} name="ConPassword"
        />}
        
<Button variant="contained" color="success"onClick={addHandler} >
{isSignup ?"Sign up":"Login"}
</Button><br/><br/>
{isSignup ?"Already have an account?":"Create an account?"}
<Button onClick={()=>setIsSignup(!isSignup)}>  Go to {isSignup ?"Login" :"sign up"}</Button>
</Box></form>
    </div>
  )
}

export default LogReg