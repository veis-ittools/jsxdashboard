import React, { useState } from 'react'
import {Typography,  Box, Button ,TextField, useTheme , Grid,} from "@mui/material";


import { tokens } from "../../theme";
import { metadomains } from './Meta_domaine'; 
import Autocomplete from '@mui/material/Autocomplete';


function RgeSuppliers() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState(metadomains[0])
    const [flag, setFlag] = useState(false)
    let [inputValue, setInputValue] = useState('')

  return (
    <Box marginTop={1}>
        <Box mb="25px" marginLeft={2}>
          <Typography
            variant="h3"
            color={colors.grey[100]}
            // fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            RGE Suppliers
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            Search Suppliers in all Sectors in FRANCE
          </Typography>
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
                options={metadomains}
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
        </Grid>


    </Box>
  )
}

export default RgeSuppliers