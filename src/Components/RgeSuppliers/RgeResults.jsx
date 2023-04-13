import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import {Typography,  Box, Button, useTheme , Grid,} from "@mui/material";
import RgeDatagrid from './RgeDatagrid';
import NewRgeDatagrid from './NewRgeDatagrid';


function RgeResults(props) {
    
    let meta = props.meta
    
    // const [domain, setDomain] =  useState('')
    // let URL = `https://veis-ittools.com:9100/domain/RGE/`
    let URL = `https://veis-ittools.com:9100/domain/RGE/${meta}`

    let headers = {
      'accept': 'application/json',
      'metadomain' : meta

    }
    // state for the domain after api call
    const [domain, setDomain] =  useState([])

    // STATE FOR INPUT FOR NAF(Autocomplete)
    const [autonaf, setAutonaf ] = useState(false)
    let [autnafinputValue, setAutnafinputValue] = useState('')

    useEffect(() => {
        axios.post(URL).then((response) => {
            setDomain(response.data.Domain);

            console.log(response.data)
        });
      }, [URL]);

      const domainOptions = domain.map((domain, index) => ({
        id: index + 1,
        label: domain
      }))

      console.log(domainOptions)    

    //   state for button

    const [buttonclick, Setbuttonclick] = useState(false)



  return (
    <div>
      {/* {domain} */}
      <Grid marginTop={0.2} marginLeft={1} alignContent={'center'} container spacing={2}>
        <Grid item xs={12} sm={8}>

            <Autocomplete
                    id="combo-box-demo"
                    onChange={(_, newValue) => {
                    // setAutonaf(!autonaf)
                    }}
                    inputValue={autnafinputValue}

                    onInputChange={(_, autnafinputValue) => {
                    setAutnafinputValue(autnafinputValue)
                    setAutonaf(!autonaf)
                    }}
                    options={domainOptions}

                    renderInput={(params) => <TextField {...params} 
                    // variant="outlined" 
                    size="small"
                    // margin="normal"

                    fullWidth
                    id="domain"
                    label="Sub Sector"
                    name="domain"
                    autoFocus
                    />}
                    />

        </Grid>
      </Grid>
      <Button
            type="submit"
            variant="contained"
            sx={{ marginTop:2,  marginLeft:3,  alignContent:'left'}}
            onClick={()=>{
                Setbuttonclick(!buttonclick)
            }}
                     
        >
            Launch Search
    </Button>
    {/* wotking RGE Without button */}
    {/* {buttonclick === true  ? <RgeDatagrid meta={meta} domain= {autnafinputValue} /> : null}  */}
    
    
    {buttonclick === true ? <NewRgeDatagrid  meta={meta} domain= {autnafinputValue} domainflag = {autonaf} buttonclick = {buttonclick} ></NewRgeDatagrid> :null} 
    </div>
  )
}

export default RgeResults
