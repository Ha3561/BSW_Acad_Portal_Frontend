
import { Button, Card, CardActions, CardContent, Chip, CircularProgress, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import LoupeIcon from '@mui/icons-material/Loupe';
import Querylist from '../../components/querylist';
import Oppurtunitylist from '../../components/opplist';
import PrimarySearchAppBar from '../../components/appbar';
const MentorDashboard = () => {

  const [queries, setQueries] = useState(null)
  const [oppts,setOpp]=useState(null)
  useEffect(() => {
    
    
    const kerberos="ee3221760"
    
      let url1 = `http://localhost:3001/api/mentor/queries/?kerberos=${kerberos}`;
      let url2 = `http://localhost:3001/api/mentor/opportunity/?kerberos=${kerberos}`;
      
   
    fetch(url1, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response here
          return response.json(); // Parse the JSON response
        } else {
          // Handle error response
          return response.json().then(errorData => {
            throw new Error(`${errorData.msg}`);
          });
        }
      })
      .then((responseData) => {
        setQueries(responseData)
        console.log(responseData)

      })
      .catch((error) => {

        console.log(error)
      });
    fetch(url2, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response here
          return response.json(); // Parse the JSON response
        } else {
          // Handle error response
          return response.json().then(errorData => {
            throw new Error(`${errorData.msg}`);
          });
        }
      })
      .then((responseData) => {
        setOpp(responseData)
        console.log(responseData)

      })
      .catch((error) => {

        console.log(error)
      });
  }, [])
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
     
        <Button size="small" startIcon={<BookmarkOutlinedIcon/>} variant="contained" href='/mark-Attendance'>Attendance</Button>
        <Button size="small" startIcon={<LoupeIcon/>} variant="contained" sx={{bgcolor:"#830ef0"}} href="float-Oppurtunity">Oppurtunity</Button>
      </CardActions>
    </Card>
    <Typography variant="h5" component="div" >
          Queries Taken
        </Typography>
        <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}} alignItems={!queries && "center"}>
       
        {queries?<Querylist mode="mentor" data={queries["takenQueries"]}/>: <CircularProgress />}
        </Box>
        <Typography variant="h5" component="div" >
          Available Queries
        </Typography>
        <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}} alignItems={!queries && "center"}>
        {queries?<Querylist mode="mentor" data={queries["availableQueries"]}/>: <CircularProgress />}
        </Box>
        <Typography variant="h5" component="div" >
        Opportunities floated by you
        </Typography>
        <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}} alignItems={!oppts && "center"}>
          {oppts? <Oppurtunitylist mode={"mentor"} data={oppts["floatedOpp"]}/>: <CircularProgress />}
        </Box>
        <Typography variant="h5" component="div" >
       Available  Opportunities
        </Typography>
        <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}} alignItems={!oppts && "center"}>
        {oppts? <Oppurtunitylist mode={"mentor"} data={oppts["availOpp"]}/>: <CircularProgress />}
        </Box>
    
        </Box>

    </div>
  )
}

export default MentorDashboard