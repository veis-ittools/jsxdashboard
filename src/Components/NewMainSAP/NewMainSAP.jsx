import React, { useState } from 'react'
import { Box, Button ,TextField,Typography, useTheme , Grid,} from "@mui/material";
// import Header from '../Header';
import { tokens } from "../../theme";
// import { famill1_options } from './Famille1'; 
import Autocomplete from '@mui/material/Autocomplete';
import CountrySelect from '../CountrySelect';
// import SecondSearchbar from '../SecondSearchbar/SecondSearchbar';
// import NewSapform from './NewSapform';
// import SapFormresults from './SapFormresults';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header from '../Header';
import FRFrontpage from './FRFrontpage';
import PRFrontpage from './PRFrontpage';
import SPFrontpage from './SPFrontpage';


function NewMainSAP() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    console.log('couuntry from new', country);

  return (
    <Box  marginLeft={2} marginTop={-2}>
      <Box display="flex" justifyContent="space-between" p={1} >
      <Grid marginTop={-2} marginLeft={1} alignContent={'center'} container spacing={2}
        >

      <Grid item xs={12} sm={8}>  
          {/* <Typography
            variant="h3"
            color={colors.grey[100]}
            // fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            SAP BI Search using VINCI Classification
          </Typography> */}
          {/* <Typography variant="h5" color={colors.greenAccent[400]}>
            Search using VINCI Classification
          </Typography> */}


        
        {/* <NewMainsearch></NewMainsearch>   */}
        {/* <NewSapSearch></NewSapSearch> */}

        <Header title= {'SAP BI Search'} subtitle={'Search using VINCI Classification'} ></Header>
        </Grid>


        <Grid item xs={12} sm={4}>  

            <FormControl sx={{ m: 2, minWidth: 220 , }}>
                      <InputLabel sx = {{maxHeight:75, minWidth:45}}  >
                          Country
                      </InputLabel>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={country}
                      label="Country"
                      onChange={handleChange}
                      variant="outlined" 
                      size="small"
                      margin="normal"
                      required
                      defaultValue='FRANCE'
                      
                      >
                      {/* <MenuItem value="">
                          <em>FRANCE</em>
                      </MenuItem> */}
                      <MenuItem  value={'FRANCE'}>FRANCE</MenuItem>
                      <MenuItem value={'SPAIN'}>SPAIN</MenuItem>
                      <MenuItem value={'PORTUGAL'}>PORTUGAL</MenuItem>
                      {/* <MenuItem value={'GERMANY(*inactive)'}>GERMANY(*inactive)</MenuItem>
                      <MenuItem value={'SUD AFRICA(*inactive)'}>SUD AFRICA(*inactive)</MenuItem> */}
                      </Select>
                  </FormControl>

        </Grid>

      </Grid>

      </Box> 

    {country === 'FRANCE' ? <FRFrontpage country = {country} ></FRFrontpage>: null} 
    {country === 'PORTUGAL' ? <PRFrontpage country = {country} ></PRFrontpage> : null}
    {country === 'SPAIN' ? <SPFrontpage country = {country} ></SPFrontpage> : null}
        
    
    </Box>

  )
}

export default NewMainSAP