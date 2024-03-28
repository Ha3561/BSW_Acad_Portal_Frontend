import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';

const FloatOpp = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [course,setcourse]=useState('')

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ title, description, startDate, endDate });
    const data={
      kerberos:"",
      title,
      description,
      end:endDate,
      course:""
    }
    // Add logic for submitting the form
    fetch('http://localhost:3001/api/mentor/opportunity/post', {
      method: 'POST',
     
      body: JSON.stringify(data),
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
        
        console.log(responseData)

      })
      .catch((error) => {
       
       console.log(error)
      });
  };

  return (
    <Box  display="flex" justifyContent="center" alignItems="center" width={"100%"}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper elevation={3} sx={{ padding: 3,width:"100%" }}>
        <Typography variant="h4" align="center" gutterBottom>
        Float Opportunity
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>

            <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          label="Course"
          onChange={(e)=>{setcourse(e.target.value)}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                required
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                label="Start Date & Time"
                fullWidth
                value={startDate}
                onChange={handleStartDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                label="End Date & Time"
                fullWidth
                value={endDate}
                onChange={handleEndDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </LocalizationProvider>
  </Box>
  );
};

export default FloatOpp;


