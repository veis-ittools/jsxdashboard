import React, { useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, Grid, TextField, IconButton, useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Typography from '@mui/material/Typography';

import { famill1_options } from './Famille1'; 
import Autocomplete from '@mui/material/Autocomplete';
import SecondSearchbar from '../SecondSearchbar/SecondSearchbar';
import CountrySelect from '../CountrySelect';


function Mainseach() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const [value, setValue] = useState(famill1_options[0])
    const [flag, setFlag] = useState(false)
    let [inputValue, setInputValue] = useState('')

  return (

        // <Box backgroundColor={colors.primary[400]}
        <Box
        sx={{
            marginTop: 1,
            marginLeft: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2,
            width: 800,
            height: 300,  
            
          }}
        > 
        <Grid marginTop={-2} alignContent={'center'} container spacing={3}
        >
          <Grid item xs={12} sm={8}>
            <Autocomplete
                value={value}
                onChange={(_, newValue) => {
                setValue(newValue)
                }}
                inputValue={inputValue}
                
                
                onInputChange={(_, newInputValue) => {
                setInputValue(newInputValue)
                console.log(newInputValue)
                console.log(typeof(newInputValue))
                console.log(newInputValue.toString().length)
                if (newInputValue.toString().length > 5){
                    console.log('code is here')
                    setFlag(true)

                }  
                if (newInputValue.toString().length === 0){
                    console.log('code is here')
                    setFlag(false)
                }      

                }}
                options={famill1_options}
                // style={{ width: 300  }}
                renderInput={(params) => <TextField {...params} 
                variant="outlined" 
                size="small"
                margin="normal"
                required
                // fullWidth
                id="purchasefamily1"
                label="Achat famille 1"
                name="purchasefamily1"
                autoFocus
                />}                   
                />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Enter Keywords"
                    size="small" 
                    variant="outlined" 
                    margin="normal">
            </TextField>
          </Grid>          
        </Grid>

        
        <Grid marginTop={-2} alignContent={'center'} container spacing={3}
        > 
          <Grid item xs={12} sm={8}>
             {/* <SecondSearchbar famille1= {inputValue} />  */}
            {flag  && <SecondSearchbar famille1= {inputValue} />} 
          </Grid>
       
        <Grid item xs={12} sm={4}>
            {/* <TextField label="Country"
                    size="small" >
            </TextField> */}
            {flag  && <CountrySelect/>}
          </Grid>
        </Grid>  


        {/* second line */}
        {/* <Grid marginTop={-1.75} alignContent={'center'} container spacing={3}
        >
          <Grid item xs={12} sm={8}>
            <TextField label="Achat F2"
                      fullWidth
                    size="small" >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Country"
                    size="small" >
            </TextField>
          </Grid>          
        </Grid> */}

        {/* 3third line */}
        {/* <Grid marginTop={-1.75} alignContent={'center'} container spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <TextField label="NAF"
                      fullWidth
                    size="small" >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField label="Region"
                    size="small" >
            </TextField>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField label="City"
                    fullWidth
                    size="small" >
            </TextField>
          </Grid>            */}
        {/* </Grid>  */}
        {/* 3 line */}
      
        </Box>

        
  )
}

export default Mainseach


