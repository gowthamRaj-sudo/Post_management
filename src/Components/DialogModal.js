import { Avatar, Box, Card, Grid, Modal, Typography } from '@mui/material'

import React from 'react'
import { AiOutlineLeft,AiOutlineHeart } from 'react-icons/ai'

const DialogModal = ({open,onClose,SelectedValues}) => {


   
  return (
    <>
      <Modal open={open} onClose={onClose}>

<Card sx={{width:"350px",height:"380px",position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",}}>
   <Box sx={{background:"rgb(239,241,242)"}}>
    <Grid container spacing={2} p={2}>
        <Grid item xl={4}lg={4}md={4} sm={4}xs={4}>
           <AiOutlineLeft/>
        </Grid>
        <Grid item xl={4} lg={4} md={4}sm={4} xs={4}>
            <Typography>Commands</Typography>
        </Grid>
        <Grid item xl={4} lg={4} md={4}sm={4} xs={4}/>
       </Grid>   
</Box>
<Box  sx={{ overflowY: 'auto', height: '350px' }}>
{/* <Card > */}
    <Grid container spacing={3} p={2}> 
    <Grid item xl={12} lg={12} md={12} sm={12}xs={12}>
       {SelectedValues?.map((values,index)=>(
        <Card sx={{padding:"5px"}}>
          
        <Box sx={{display:"flex",padding:"8px"}}>
           <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      /> &nbsp;
      <Typography sx={{ fontSize: "12px",
      fontWeight: "600",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"}}>{values.name}</Typography>  
       <Typography sx={{fontSize:"10px",color:"rgb(67, 83, 255)"}}>
        @{values.email}
        
        </Typography>
        </Box>
        <Typography sx={{textAlign:"left",padding:"5px"}}>
       {values.body}
        </Typography>
        <Box sx={{float:"right"}}>
             <AiOutlineHeart/>  
        </Box>
        &nbsp;
        </Card>
         
       )) }


       
    </Grid>
    
    
    </Grid>
{/* </Card> */}


</Box>




</Card>


      </Modal>

      
    </>
  )
}

export default DialogModal
