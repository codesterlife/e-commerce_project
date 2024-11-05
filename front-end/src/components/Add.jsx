import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FileUploadIcon from '@mui/icons-material/FileUpload';
const Add = (props) => { var [inputs, setInputs] = useState({ Name: "", Price: "", Category: "" })
var location = useLocation()
var navigate = useNavigate()
console.log(location.state)
const inputHandler = (e) => {
  setInputs({ ...inputs, [e.target.name]: e.target.value })
  console.log(inputs)
}

const addHandler = () => {
 console.log("clicked")

    axios.post("http://localhost:3005/add", inputs)
      .then((res) => {
        console.log(res)
        alert(res.data.message)
        window.location.reload()
        console.log("reloded")

      })
      .catch((err) => { console.log(err) })
  }

useEffect(() => {
  if (location.state!==null)
  setInputs({
    ...inputs,
    Name: location.state.val.Name,
    Price: location.state.val.Price,
    Category: location.state.val.Category,
    
  })
}), []
const[file,setFile]=useState()
const upload=() => {
  const formData=new FormData()
  formData.append('file',file)
  axios.post("http://localhost:3005/upload",formData)
  .then(res =>{})
  .catch(er=>console.log(er))
}
  return (
    <div>
         <Box sx={{width: '300px', margin: '50px auto'}}>
        <h1>Product Adding Page</h1>
          
          <TextField id="filled-basic" label="Product Name" value={inputs.Name} onChange={inputHandler} name='Name' variant="filled" /><br /><br />
          <div><TextField id="filled-basic" label="Image" value={inputs.Image} onChange={inputHandler} name='Image' variant="filled" />&nbsp;
          <Button variant="contained"onClick={upload} color='success' size="large"><FileUploadIcon fontSize='large'/></Button></div><br /><br />
          <TextField id="filled-basic" label="Price" value={inputs.Price} onChange={inputHandler} name='Price' variant="filled" /><br /><br />
          <TextField id="filled-basic" label="Category"  value={inputs.Category} onChange={inputHandler} name='Category' variant="filled" /><br /><br />
          <Button variant="contained"onClick={addHandler} color='success' >Add</Button>
          </Box>
    </div>
  )
}

export default Add