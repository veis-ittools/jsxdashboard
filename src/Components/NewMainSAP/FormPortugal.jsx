
import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import AllSAPDatagrid from './AllSAPDatagrid';


function FormPortugal(props) {
    let famille1 = props.famille1
    let country = props.country


    let URL = `https://veis-ittools.eu/SAP/purchasefamille2/portugal/${famille1}`
    console.log(URL)


    // let headers = {
    //     'accept': 'application/json',
    //     'famille1': famille1
    // }

    let [famille2 , setFamille2 ] =  useState([])
    const [autonaf, setAutonaf ] = useState(false)
    let [autnafinputValue, setAutnafinputValue] = useState('')

    // let [apiparams2, setApiparams] = useState()
    let [formcomplete, setFromcomplete] = useState(false)
    // let [dataBI, setDataBI] = useState(false)
  
    let [buttonclickstate, setButtonclickstate]  = useState(false)

    let [fam1 , setfam1] = useState('')
    useEffect(() => {
        axios.post(URL).then((response) => {
            setFamille2(response.data.PurchaseFamille2);

            console.log(response.data)
        });
      }, [URL]);

      famille2 = famille2.filter(function(e){return e}); 
      
      const skillsOptions = famille2.map((famille2, index) => ({
        id: index + 1,
        label: famille2
      }))

      let apiparams =     
      {
        'famiile1': fam1,
        'famiile2': autnafinputValue, 
        'country': country
      }
      console.log('apiparam', apiparams)

      const onClickHandler = () => {

        setButtonclickstate(!buttonclickstate)
        console.log('buttonclickstate', buttonclickstate)

        setFromcomplete(formcomplete === true)
        setfam1(famille1)
        
        
      }

  return (
    <Box marginTop={0}>


        <Grid marginTop={-1} marginLeft={-2} alignContent={'center'} container spacing={2}
        >
        <Grid item xs={12} sm={10}>
  
            <Autocomplete
                    id="combo-box-demo"
                    onChange={(_, newValue) => {
                    // setAutonaf(!autonaf)
                    }}
                    inputValue={autnafinputValue}

                    onInputChange={(_, autnafinputValue) => {
                    setAutnafinputValue(autnafinputValue)
                    setAutonaf(!autonaf)

                    console.log('from INPUT I WANT--', autnafinputValue)
                    console.log('autofalg--', autonaf)

                    }}
                    options={skillsOptions}

                    renderInput={(params) => <TextField {...params} 
                    // variant="outlined" 
                    size="small"
                    // margin="normal"

                    fullWidth
                    id="famille2"
                    label="Família de compras 2"
                    name="famille2"
                    autoFocus
                    />}

                    /> 
            </Grid>
        </Grid>
        <Button
              type="submit"
              variant="contained"
              sx={{ marginTop:2, marginLeft:2,  alignContent:'left'}}
              onClick={onClickHandler}
            >
              Launch Search
        </Button>
        {buttonclickstate === true ?<AllSAPDatagrid
        apiparams = {apiparams}
            ></AllSAPDatagrid>: null} 

    </Box>
  )
}

export default FormPortugal
