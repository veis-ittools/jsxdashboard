import React, { useState } from 'react'
import {Typography,  Box, Button ,TextField, useTheme , Grid,Tooltip} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LanguageIcon from '@mui/icons-material/Language';

import { tokens } from "../../theme";
// import { metadomains } from './Meta_domaine'; 

import { spaindomains } from './Spain_domains';
import Autocomplete from '@mui/material/Autocomplete';
import SpainDatagrid from './SpainDatagrid';

function OpenSpain() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState(spaindomains[0])
    const [flag, setFlag] = useState(false)
    let [inputValue, setInputValue] = useState('')

    const [buttonclick, Setbuttonclick] = useState(false)



  return (
    <Box marginTop={1}>
         <Box mb="25px" marginLeft={2}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography
              variant="h4"
              color={colors.grey[100]}
              // fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
                Buscar empresas utilizando datos de código abierto ESPAÑA.
            </Typography>
          
            
            {/* <Tooltip title="Click the icon to visit website">
                <Avatar sx={{  bgcolor: 'secondary.main' }}>
                    <LanguageIcon  onClick={event =>  window.open('https://www.ecologie.gouv.fr/label-reconnu-garant-lenvironnement-rge')} />
                </Avatar> 
              </Tooltip> */}

{/* 
            <Typography
              variant="h6"
              color={colors.grey[100]}>

                Website

            </Typography> */}
          </Stack>

          <Typography variant="h6" color={colors.greenAccent[400]}>
            {/* Le label RGE, un gage de qualité des professionnels de la rénovation énergétique */}
            Buscar empresas basadas en los principales sectores en todas las regiones de España. 
            
          </Typography>


          <Grid marginTop={-1} marginLeft={0} alignContent={'center'} container spacing={2}
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
                options={spaindomains}
                // style={{ width: 300  }}
                renderInput={(params) => <TextField {...params} 
                variant="outlined" 
                size="small"
                margin="normal"
                required
                // fullWidth
                id="purchasefamily1"
                label="Main Sector"
                name="purchasefamily1"
                autoFocus
                />}                   
                />
          </Grid>
        </Grid>
        <Button
            type="submit"
            variant="contained"
            sx={{ marginTop:1,  marginLeft:2,  alignContent:'left'}}
            onClick={()=>{
                Setbuttonclick(!buttonclick)
            }}
                     
        >
            Launch Search
        </Button>

        {buttonclick && <SpainDatagrid domain= {inputValue}></SpainDatagrid>}

        </Box>       
    </Box>
  )
}

export default OpenSpain
