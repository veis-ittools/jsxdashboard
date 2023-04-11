import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function FeedbackBox() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async  (e) => {
      e.preventDefault();
      // Handle form submission logic here
      try {
          const response = await  axios.post('/api/endpoint', { data: 'my data' });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
  
      console.log(feedback);
    };
  
    const handleInputChange = (e) => {
      setFeedback(e.target.value);
    };
  

  return (

    <Box mb="25px" marginTop={2}>

    <Typography
        variant="h3"
        color={colors.grey[100]}
        // fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        Feedback
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        Search using VINCI Classification
      </Typography>


        <Grid marginTop={1} marginLeft={2} alignContent={'center'} container spacing={2}
        >
          <Grid item xs={12} sm={8}>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="feedback-input"
                  label="Feedback"
                  // variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  value={feedback}
                  onChange={handleInputChange}
                />

              </form>
            </Grid>
        </Grid>
        <Button sx = {{ marginLeft:2, marginTop:3}} variant="contained" type="submit">
                  Submit Feedback
        </Button>
        </Box>
  )
}

export default FeedbackBox
