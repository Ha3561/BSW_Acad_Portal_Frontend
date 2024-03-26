import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, Paper } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/system';
import { PhotoAlbumOutlined } from '@mui/icons-material';

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const MarkAttnd = () => {
  const [sessionDate, setSessionDate] = useState(null);
  const [discussion, setDiscussion] = useState('');
  const [photos, setPhoto] = useState([]);

  const handleDateChange = (date) => {
    setSessionDate(date);
  };

  const handleDiscussionChange = (event) => {
    setDiscussion(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const files = event.target.files;
    setPhoto([...photos,...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
formData.append('date', sessionDate);
formData.append('description', discussion);
photos.forEach((photo, index) => {
  formData.append(`images`, photo);
});
    fetch('http://localhost:3001/api/mentor/attendance/post', {
      method: 'POST',
     
      body: formData,
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
        setPhoto([])
        console.log(responseData)

      })
      .catch((error) => {
        setPhoto([])
       console.log(error)
      });
    
  };

  return (
    <Box  display="flex" justifyContent="center" alignItems="center" width={"100%"}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Paper elevation={3} sx={{ padding: 3 }}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Mark attendance
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              label="Session Date"
              value={sessionDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params}  />}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Discussion"
              fullWidth
              multiline
              rows={4}
              value={discussion}
              onChange={handleDiscussionChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              id="photo-upload"
              type="file"
              onChange={handlePhotoChange}
              style={{ display: 'none' }}
              multiple
            />
            <label htmlFor="photo-upload">
              <StyledButton
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Add photo
              </StyledButton>
            </label>
          </Grid>
         
          <Grid item xs={12}>
                {/* Display selected images */}
                {photos.map((photo, index) => (
                  <img key={index} src={URL.createObjectURL(photo)} alt={`image-${index}`} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                ))}
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

export default MarkAttnd;
