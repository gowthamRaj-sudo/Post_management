import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { BsFillClockFill } from "react-icons/bs";
import { AiFillDelete,AiOutlineComment } from "react-icons/ai";
const PostCard = ({ArrayValues,commands}) => {
 
  return (
    <div>
      <Card
        sx={{
          width: "100%",
          height: "450px",
          background: "#152744",
          transition: "transform 0.3s ease-in-out",
          borderRadius: "10px",

          "&:hover": {
            transform: "scale(1.00) rotate(1deg)",
            transition: "transform 0.3s ease-in-out",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop: "15px",
            color: "white",
          }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography variant="p">Gowtham </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "2px",
                height: "16px",
                background: "#4353ff",
              }}
            ></Box>
            &nbsp; &nbsp;
            <Typography
              sx={{ padding: "5px", display: "flex", alignItems: "center" }}
            >
              <BsFillClockFill color="#4353ff" />
            </Typography>
            &nbsp;
            <Typography> Sep 11,2023</Typography>
          </Box>
        </Box>
        <Box sx={{ color: "white", paddingTop: "15px" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "initial", padding: "8px", fontWeight: "600" }}
          >
          {ArrayValues.title}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "initial", padding: "5px", color: "white" }}>
          {" "}
          <Typography variant="p">
         {ArrayValues.body}
          </Typography>
        </Box>
        <Box sx={{ padding: "12px" }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              padding: "10px 12px",
              fontWeight: "600",
             
            //  "&:hover":{
            //   border:"3px solid"
            //  }
            }}
            endIcon={<AiFillDelete />}
         
          >
            Delete
          </Button>
         
          <Button   variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              padding: "10px 12px",
              fontWeight: "600",
              float:"right"
             
            //  "&:hover":{
            //   border:"3px solid"
            //  }
            }}
            endIcon={<AiOutlineComment />} onClick={commands}>Commands</Button>
        </Box>
     
      </Card>
    </div>
  );
};

export default PostCard;
