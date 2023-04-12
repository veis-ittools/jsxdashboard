import React, { useState } from 'react'
import {Typography,  Box, Button ,TextField, useTheme , Grid,Tooltip} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LanguageIcon from '@mui/icons-material/Language';

import { tokens } from "../../theme";
import { metadomains } from './Meta_domaine'; 
import Autocomplete from '@mui/material/Autocomplete';
import RgeResults from './RgeResults';

function RgeSuppliers() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState(metadomains[0])
    const [flag, setFlag] = useState(false)
    let [inputValue, setInputValue] = useState('')

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
              RGE  (Reconnu garant de l'environnement) Certificated Suppliers
            </Typography>
          
            
            <Tooltip title="Click the icon to visit website">
                <Avatar sx={{  bgcolor: 'secondary.main' }}>
                    <LanguageIcon  onClick={event =>  window.open('https://www.ecologie.gouv.fr/label-reconnu-garant-lenvironnement-rge')} />
                </Avatar> 
              </Tooltip>


            <Typography
              variant="h6"
              color={colors.grey[100]}>

                Website

            </Typography>
          </Stack>

          <Typography variant="h6" color={colors.greenAccent[400]}>
            {/* Le label RGE, un gage de qualité des professionnels de la rénovation énergétique */}
            Recherchez-vous des fournisseurs spécialisés dans la rénovation énergétique ou l'installation d'équipements à énergie renouvelable ? Les travaux et installations réalisés par des professionnels certifiés RGE permettent d'obtenir des aides financières et des déductions fiscales.
            
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
                label="Main Sector"
                name="purchasefamily1"
                autoFocus
                />}                   
                />
          </Grid>
        </Grid>
        {flag && <RgeResults meta={inputValue}></RgeResults>}


    </Box>
  )
}

export default RgeSuppliers