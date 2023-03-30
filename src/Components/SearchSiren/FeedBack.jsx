import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

function Feedback() {
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
    <form onSubmit={handleSubmit}>
      <TextField
        id="feedback-input"
        label="Feedback"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        value={feedback}
        onChange={handleInputChange}
      />
      <Button variant="contained" type="submit">
        Submit Feedback
      </Button>
    </form>
  );
}
