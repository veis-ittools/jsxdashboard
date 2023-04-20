import React, { useState } from 'react'
import { Box ,TextField, useTheme , Typography,  Grid,} from "@mui/material";
import { tokens } from "../../theme";
import { famill1_options_fr } from './Famille1FR'; 
import Autocomplete from '@mui/material/Autocomplete';
import SapFormresults from '../SapSearch/SapFormresults';


function FRFrontpage(props) {

    let country = props.country
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState(famill1_options_fr[0])

    // const [value, setValue] = useState(famill1_options[0])
    const [flag, setFlag] = useState(false)
    let [inputValue, setInputValue] = useState('')

  return (
    <Grid marginTop={-3} marginLeft={1} alignContent={'center'} container spacing={1}
    >
      <Grid item xs={12} sm={10}>

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
            options={famill1_options_fr}
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

      {flag === true   ?  <SapFormresults  famille1= {inputValue} ></SapFormresults>
        : null}

      </Grid>


  )
}

export default FRFrontpage