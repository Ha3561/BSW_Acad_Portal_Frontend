import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, Paper } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const MarkAttnd = () => {
  const [sessionDate, setSessionDate] = useState(null);
  const [discussion, setDiscussion] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleDateChange = (date) => {
    setSessionDate(date);
  };

  const handleDiscussionChange = (event) => {
    setDiscussion(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log({ sessionDate, discussion, photo });
  };

  return (
    <Box height="500px" display="flex" justifyContent="center" alignItems="center">
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Paper elevation={3} sx={{ padding: 3 }}>
      <form onSubmit={handleSubmit}>
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
            />
            <label htmlFor="photo-upload">
              <StyledButton
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Upload Photo of session
              </StyledButton>
            </label>
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
