import React, { useState } from 'react'
import { Box ,TextField, useTheme , Typography,  Grid,} from "@mui/material";
import { tokens } from "../../theme";
import { famill1_options_sp } from './Famille1SP'; 
import Autocomplete from '@mui/material/Autocomplete';
import FormSpain from './FormSpain';

function SPFrontpage(props) {

    let country = props.country
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState(famill1_options_sp[0])

    // const [value, setValue] = useState(famill1_options[0])
    const [flag, setFlag] = useState(false)
    let [inputValue, setInputValue] = useState('')


  return (
    <Box marginTop={-5} >
        <Grid container spacing={3} >
        <Grid item xs={12} sm={10}>
        <Autocomplete
            value={value}
            onChange={(_, newValue) => {
            setValue(newValue)
            }}
            inputValue={inputValue}
            
            
            onInputChange={(_, newInputValue) => {
            setInputValue(newInputValue)
            console.log('input value', newInputValue)
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
            options={famill1_options_sp}
            // style={{ width: 300  }}
            renderInput={(params) => <TextField {...params} 
            variant="outlined" 
            size="small"
            margin="normal"
            required
            // fullWidth
            id="purchasefamily1"
            label="Família de compras 1"
            name="purchasefamily1"
            autoFocus
            />}                   
            />
      </Grid>
      </Grid> 
      {flag === true   ?  <FormSpain  famille1= {inputValue} country = {country}></FormSpain>
        : null}
      </Box>
  )
}

export default SPFrontpage