

import { AppBar, Button, Card, CardActions, CardContent, Chip, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import LoupeIcon from '@mui/icons-material/Loupe';
import Querylist from '../../components/querylist';
import Oppurtunitylist from '../../components/opplist';
import PrimarySearchAppBar from '../../components/appbar';
const StudentDashboard = () => {
  return (
    <div style={{width:"100vw",height:"max-Content"}}>
      <PrimarySearchAppBar/>
        <Box display="flex" flexDirection={"column"} marginTop="40px"  sx={{mx:"10%"}}>

        <Card sx={{ minWidth: 150,width:300,my:"30px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Get started
        </Typography>
        <Typography variant="h5" component="div">
          Actions
        </Typography>
        
        <Typography variant="body2">
          
        </Typography>
      </CardContent>
      <CardActions>
     
        
        <Button size="small" startIcon={<LoupeIcon/>} variant="contained" >Query</Button>
      </CardActions>
    </Card>
    <Typography variant="h5" component="div" >
          Queries
        </Typography>
        <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}}>
       
          <Querylist mode="student"/>
        </Box>
       
        </Box>

    </div>
  )
}

export default StudentDashboard