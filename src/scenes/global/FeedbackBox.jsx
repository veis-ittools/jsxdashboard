import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Alert from '@mui/material/Alert';


function FeedbackBox() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [feedback, setFeedback] = useState('');

    const [response, setresponse] = useState(null)

    let URL = 'https://veis-ittools.eu/Feedback'

    let headers = {
        'accept': 'application/json',
        'feedback': feedback
    }


    console.log('a;dfa;sldfja;sdlfja;sdlfj')






    const handleSubmit = async  (e) => {
      e.preventDefault();
      // Handle form submission logic here
      try {
          const response = await  axios.post(URL, {}, {headers});
          console.log(response.data);
          setresponse(response.data.message)
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
        Kindly share your ideas, feedbacks, so that we can improve the user experience and functionalities of this application
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
        <Button sx = {{ marginLeft:2, marginTop:3}} onClick= {handleSubmit} variant="contained" type="submit">
                  Submit Feedback
        </Button>


        {response !== null ? <Alert sx={{width:'50%' , marginLeft:2, marginTop:2}} severity="info"> Record Submitted, Thanks!</Alert>: null}
        </Box>
  )
}

export default FeedbackBox
