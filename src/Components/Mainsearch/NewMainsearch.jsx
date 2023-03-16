import React, { useState } from 'react'
import { Box, Button ,TextField, useTheme , Grid,} from "@mui/material";
import Header from '../Header';
import { tokens } from "../../theme";
import { famill1_options } from './Famille1'; 
import Autocomplete from '@mui/material/Autocomplete';
import CountrySelect from '../CountrySelect';
import SecondSearchbar from '../SecondSearchbar/SecondSearchbar';


function NewMainsearch() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState(famill1_options[0])
    const [flag, setFlag] = useState(false)
    let [inputValue, setInputValue] = useState('')

  return (
    <Box>
        <Box display="flex" justifyContent="space-around" alignItems="center"   >
            {/* <Header title="Search" subtitle="Search using VINCI fammille classification " /> */}
        </Box>

        <Grid marginTop={-3} marginLeft={1} alignContent={'center'} container spacing={2}
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
            <CountrySelect/>
          </Grid>
        </Grid>


        <Grid marginTop={-3.2} marginLeft={0} marginRight={0} alignContent={'center'} container spacing={3}
        >  
          <Grid item xs={12} sm={10.1}>
             {/* <SecondSearchbar famille1= {inputValue} />  */}
            {flag  && <SecondSearchbar famille1= {inputValue} />} 
          </Grid> 
       
        </Grid>    


    </Box>

  )
}

export default NewMainsearch
