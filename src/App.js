import {Typography,Grid, Box, Badge, Button }from '@mui/material';
import Cookies from 'universal-cookie';
import './App.css';
// import PostCard from "./Components/PostCard";
// import { AiFillDelete } from "react-icons/ai";
// import SearchComponent from './Components/SearchComponent';
import PostCardContainer from './PostCardContainer';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const cookies = new Cookies();
  const[allPostData,setAllPostData]=useState([])
  const getAllPostData=async()=>{
    try{
      const response=await axios.get(` https://jsonplaceholder.typicode.com/posts`)
      if(response.status===200){
        const responseData=JSON.stringify (response.data)
        localStorage.setItem("AllPosts", (responseData));
 
       
        // console.log("api reapose",JSON.stringify(responseData))
        setAllPostData(response.data)
      }
    }catch(error){
      console.log(error)
    }

  }
  const postDataString = localStorage.getItem("AllPosts");
const postData = JSON.parse(postDataString);

console.log("Data from localStorage:", postData);
useEffect(()=>{
  getAllPostData()
},[])

  return (
    <div className="App">
      <div style={{textAlign:'center'}}>  <Typography variant="h5" sx={{color:"white",fontWeight:"700",letterSpacing:'2px',padding:"15px"}}>Post Management </Typography>
<Typography variant="p" sx={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
    </div>
 

{allPostData.length>0?<PostCardContainer data={postData?postData: allPostData}/>:<Typography sx={{color:"white"}}>"no post Found !"</Typography> }

    </div>
  );
}

export default App;
