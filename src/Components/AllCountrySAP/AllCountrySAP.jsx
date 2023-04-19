import React, { useState } from 'react'
import { Box ,TextField, useTheme , Typography,  Grid,} from "@mui/material";
// import Header from '../Header';
import { tokens } from "../../theme";
import { famill1_options } from './Famille1'; 
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SapFormresults from '../SapSearch/SapFormresults';
import FormAllSAP from './FormAllSAP';
import Alert from '@mui/material/Alert';


function AllCountrySAP() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState(famill1_options[0])
    const [flag, setFlag] = useState(false)
    let [inputValue, setInputValue] = useState('')

    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };
  

    console.log('fam1', inputValue)
    console.log('country', country)
    console.log('country type', typeof( country))
    

  return (
    <Box marginTop={2}>

        <Typography
        variant="h3"
        color={colors.grey[100]}
        // fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        SAP BI Search
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        Search using VINCI Classification
      </Typography>
        <Grid marginTop={-1} marginLeft={1} alignContent={'center'} container spacing={2}
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

        {flag === true && country === 'FRANCE'  ?  <SapFormresults  famille1= {inputValue} ></SapFormresults>
        : null}

        {flag === true && country !== 'FRANCE' ?  <FormAllSAP  famille1= {inputValue}  country = {country}/>
        : null} 

        {flag === true && country === '' ? <Alert sx={{width:'50%' , marginLeft:2, marginTop:2}}  severity="info"> select country</Alert>
    : null }

    </Box>

  )
}

export default AllCountrySAP
