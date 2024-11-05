import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const Login = () => {
    return (

        <div>
            <Box sx={{width: '300px', margin: '50px auto'}}>
            <Typography variant='h4' sx={{ fontFamily: 'fantasy', margin: '10px'}}>
        Login
      </Typography>
            <TextField
                label="Username"
                variant="outlined"
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    }
                }} 
                sx={{ backgroundColor: '#fdfdfd'}}/><br /><br />
            <TextField
                label="Password"
                variant="outlined"
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    }
                }}
                sx={{ backgroundColor: '#fdfdfd'}}
            /><br /><br />
            <Button variant="contained" color="success">Login</Button>
            </Box>
        </div>
    )
}

export default Login