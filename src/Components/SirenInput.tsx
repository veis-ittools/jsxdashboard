
// import React, { useState} from 'react'
// import { Box } from '@mui/system';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import ContentSiren from '../ContentSiren/ContentSiren';

// function SirenInput() {


//     const [inputsiren, setInputSiren] = useState<string>('')
//     const [pastedsiren, setPasteSiren] = useState<string>('')
//     const [validflag, setValidFlag] = useState(false)
//     const [pasteflag, setPasteFlag] = useState(false)

//     let [buttonclickstate, setButtonclickstate]  = useState<any>(false)

    
//     const onPaste = (event:any) => {
//         let events_s:any  =  event.clipboardData.getData("text/plain")
//         setPasteSiren(events_s)
//         console.log('EVENTS', events_s)

//         if (events_s.toString().length === 9){
//           console.log('code is here')
//           setPasteFlag(true)
//           // setValidFlag(true)
//           // setInputSiren(events_s)
//         } 
//         else { setPasteFlag(false)}
//         console.log('pasted siren', pasteflag);
//         // console.log('input siren', inputsiren);
//       };
    

//     // const handleChange = (events:any) => {
//     //   console.log(events.target.value)
      
//     // }





//   return (
//     <div>
//         <Box
//           sx={{
//             marginTop: 3,
//             // display: 'flex',
//             // flexDirection: 'column',
//             // alignItems: 'center',
//             width: 650,
//             height: 80,
//             bgcolor: 'background.paper',
//             boxShadow: 1,
//             borderRadius: 2,
            
//           }}
//         > 
//             <Grid container spacing={2}>
//                 <TextField
//                     variant="standard"
//                     margin="normal"
//                     // fullWidth
//                     name="siren"
//                     label="Enter SIREN"
//                     size="small"
//                     id = 'siren'
//                     sx={{ marginTop:2,
//                     mx:6
         
//                     }}

//                     // value = {inputsiren}
//                     autoFocus
//                     // onChange={handleChange}
//                     // onChange= {handleChange}
//                     onChange ={(events)=>{

//                         if (pasteflag === false){
//                           console.log('IF pasted flag false code')
//                           setInputSiren( events.target.value)
//                           // setValidFlag(true)

//                         }
//                         // setInputSiren( events.target.value)
//                         console.log(inputsiren);
                        
//                       }
                     
//                     }
//                     inputProps={{ onPaste }}
//                     />
//             </Grid>

//             <Button
//                 type="submit"
//                 variant="contained"
//                 onClick={setButtonclickstate}
//                 sx={{ marginTop:2,
//                   flexDirection: 'column',
//                   alignItems: 'left',}}>
//               Launch search
//             </Button>
//             {buttonclickstate && <ContentSiren sirenvar= {inputsiren} pastedsirenvar = {pastedsiren}></ContentSiren>}
//         </Box>

//     </div>
//   )
// }


// export default SirenInput
