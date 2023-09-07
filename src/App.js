import {Typography,Grid, Box, Badge, Button }from '@mui/material';
import './App.css';
import PostCard from "./Components/PostCard";
import { AiFillDelete } from "react-icons/ai";
import SearchComponent from './Components/SearchComponent';
import PostCardContainer from './PostCardContainer';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const[allPostData,setAllPostData]=useState([])
  const getAllPostData=async()=>{
    try{
      const response=await axios.get(` https://jsonplaceholder.typicode.com/posts`)
      if(response.status===200){
        setAllPostData(response.data)
      }
    }catch(error){
      console.log(error)
    }

  }
  console.log(allPostData)
useEffect(()=>{
  getAllPostData()
},[])

  return (
    <div className="App">
      <div style={{textAlign:'center'}}>  <Typography variant="h5" sx={{color:"white",fontWeight:"700",letterSpacing:'2px',padding:"15px"}}>Post Management </Typography>
<Typography variant="p" sx={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
    </div>
 {/* <Grid container spacing={2}  p={5}>
  <Grid item xl={8} lg={8} md={8} sm={6} xs={12}>
    <Box>
    <SearchComponent/>
  </Box>
  </Grid>
  <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
    <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}} >
<Badge badgeContent={4} color="primary" >
<AiFillDelete color='white' size={25}/>
</Badge>
<Box>
  <Button variant='contained'>Refresh</Button>
</Box>
</Box>
  </Grid>
 </Grid> */}
 {/* Post Cards */}

{allPostData.length>0?<PostCardContainer data={allPostData}/>:<Typography sx={{color:"white"}}>"no post Found !"</Typography> }

    </div>
  );
}

export default App;
