import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import ApartmentIcon from '@mui/icons-material/Apartment';

// import Siren from './Siren';
// import Datagrid from './Datagrid';
import SampleApi from './SampleApi';



const theme = createTheme();

function EnterpriseSearch() {
    
    const [onchangevar, setOnchangevar] =  useState('')
    let [buttonclickstate, setButtonclickstate]  = useState(false)

    let [countervar, setCountervar] = useState(0)

    const onChangehandler = (event) => {
      setOnchangevar(event.target.value)
    }
    
    const onButtonClick = () => {
        setButtonclickstate(true)
        setCountervar(countervar = countervar + 1)
        
      
    }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            width: 500,
            height: 100,
            
          }}
        >
            <Stack direction="row" alignItems="center" gap={1}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <ApartmentIcon />
                </Avatar> 
                <Typography component="h1" variant="h5"> 
                    Enterprise Search 
                </Typography>
            </Stack>
                  
            <TextField
                margin="normal"
                required
                fullWidth
                id="siren"
                label="Enter SIREN"
                name="siren"
                autoFocus
                size="small" 
                onChange={onChangehandler}
                />
            <div>
                <Button
                type="submit"
                variant="contained"
                size="small" 
                sx={{ marginTop:2,  alignContent:'left' }}
                onClick={onButtonClick}
                >
                Launch Search
                </Button> 
                {/* {buttonclickstate && <SampleApi/>}  */}
                {/* {countervar} */}
                {console.log(buttonclickstate)}
            </div>



        </Box>
        {/* {buttonclickstate && <SampleApi/>} */}
      </Container>
      
      <Grid container justifyContent="center">
        {buttonclickstate && <SampleApi sirenvar= {onchangevar}/>}
      </Grid>

    </ThemeProvider>
  );

    </div>
  )
}

export default EnterpriseSearch
