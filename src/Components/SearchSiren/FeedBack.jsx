// import { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import axios from 'axios';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import { Typography, Box, useTheme } from "@mui/material";

// function Feedback() {
//   const [feedback, setFeedback] = useState('');

//   const handleSubmit = async  (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     try {
//         const response = await  axios.post('/api/endpoint', { data: 'my data' });
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }

//     console.log(feedback);
//   };

//   const handleInputChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   return (

//     <Box mb="25px" marginTop={2}>

//     <Typography
//         variant="h3"
//         color={colors.grey[100]}
//         // fontWeight="bold"
//         sx={{ m: "0 0 5px 0" }}
//       >
//         Feedback
//       </Typography>
//       <Typography variant="h5" color={colors.greenAccent[400]}>
//         Search using VINCI Classification
//       </Typography>


//         <Grid marginTop={1} marginLeft={5} alignContent={'center'} container spacing={2}
//         >
//           <Grid item xs={12} sm={6}>
//               <form onSubmit={handleSubmit}>
//                 <TextField
//                   id="feedback-input"
//                   label="Feedback"
//                   // variant="outlined"
//                   multiline
//                   rows={4}
//                   // fullWidth
//                   value={feedback}
//                   onChange={handleInputChange}
//                 />
//                 <Button variant="contained" type="submit">
//                   Submit Feedback
//                 </Button>
//               </form>
//             </Grid>
//         </Grid>
//         </Box>
//   );
// }
