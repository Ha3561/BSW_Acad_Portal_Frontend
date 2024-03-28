

import { AppBar, Button, Card, CardActions, CardContent, Chip, CircularProgress, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import LoupeIcon from '@mui/icons-material/Loupe';
import Querylist from '../../components/querylist';
import Oppurtunitylist from '../../components/opplist';
import PrimarySearchAppBar from '../../components/appbar';
import { useState } from 'react';
const StudentDashboard = () => {
  const [queries, setQueries] = useState(null)
  useEffect(() => {
    const data = {}
    const statuses = ["QUEUED", "AVAILABLE", "TAKEN"]
    let url;
    const kerberos="ee3221760"
    if (statuses.length === 0) {
      url = `http://localhost:3001/api/student/queries/?kerberos=${kerberos}`;
    } else {
      url = `http://localhost:3001/api/student/queries/?kerberos=${kerberos}&statuses=${statuses.join(',')}`;
    }
    fetch(url, {
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
  }, [])

  return (
    <div style={{ width: "100vw", height: "max-Content", minHeight: "100vh" }}>
      <PrimarySearchAppBar />
      <Box display="flex" flexDirection={"column"} marginTop="40px" sx={{ mx: "10%" }}>

        <Card sx={{ minWidth: 150, width: 300, my: "30px" }}>
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


            <Button size="small" startIcon={<LoupeIcon />} variant="contained" >Query</Button>
          </CardActions>
        </Card>
        <Typography variant="h5" component="div" >
          Queries
        </Typography>
        <Box display="flex" justifyContent={"center"} flexDirection={"column"} width="100%" sx={{ borderRadius: "20px", bgcolor: "#f2f0f5", py: "30px", mb: "30px" }} alignItems={!queries && "center"}>
        {queries?<Querylist mode="student" data={queries}/>: <CircularProgress />}
        </Box>

      </Box>

    </div>
  )
}

export default StudentDashboard