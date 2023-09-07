import { Badge, Box, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import PostCard from './Components/PostCard'
import SearchComponent from './Components/SearchComponent'
import { AiFillDelete } from 'react-icons/ai'
import DialogModal from './Components/DialogModal'
import axios from 'axios'

const PostCardContainer = ({data}) => {
  const[searchPost,setSearchPost]=useState("")
  const[count,setCount]=useState(4)
  const[dialogBox,setDialogBox]=useState(false)
  // const[selectedPostId,setSelectedPostId]=useState(null)
  const[selectedComments,setSelectedCommends]=useState([])
  const filterdPost=data.filter((value)=>(
    value.title.toLowerCase().includes(searchPost.toLowerCase())||
    value.body.toLowerCase().includes(searchPost.toLowerCase())
  ))
  const handleModalClose=()=>{
    setDialogBox(false)
  }


  const getSelectedComments=async(post_id)=>{
    setDialogBox(true)
    try{
        const response=await axios.get(` https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
        if(response.status===200){
          setSelectedCommends(response.data)
        }
    }catch(err){
        console.log(err)
    }
}
console.log(selectedComments)
  return (
   
      <Box>
        <DialogModal open={dialogBox} onClose={handleModalClose} SelectedValues={selectedComments}/>
        <Grid container spacing={2}  p={5}>
  <Grid item xl={8} lg={8} md={8} sm={6} xs={12}>
    <Box>
    <SearchComponent value={searchPost} onChange={setSearchPost}/>
  </Box>
  </Grid>
  <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
    <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}} >
<Badge badgeContent={4} color="primary" >
<AiFillDelete color='white' size={25}/>
</Badge>
<Box>
  <Button variant='contained' onClick={()=>setSearchPost("")}>Refresh</Button>
</Box>
</Box>
  </Grid>
 </Grid>
<Grid container spacing={3} p={2}>
 {filterdPost?.slice(0,count).map((values,index)=>(
    <Grid item xl={3}lg={3} md={4} sm={12} xs={12} key={index}>
    <PostCard ArrayValues={values} commands={()=>getSelectedComments(values.id)}/>
  </Grid>
 )) }

</Grid>
<Button onClick={()=>setCount(count+4)} variant='contained'sx={{float:"right"}} >Show more</Button>
</Box>
   
  )
}

export default PostCardContainer
