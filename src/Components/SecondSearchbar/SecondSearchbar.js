import React, {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
// import Grid from '@mui/material/Grid';

// country select
// import CountrySelect from '../../Components/MainSearch/CountrySelect';
// import CountrySelect from '../CountrySelect';

// NAF FORM
// import NafForm from '../NafForm/NafForm';
import NafForm from '../Nafform/Nafform';


function SecondSearchbar(props) {
    let famille1 = props.famille1
    console.log(famille1)
    let URL = `https://veis-ittools.com:5900/BI/purchasefamille2/${famille1}`

    // STATE FOR FAMILE2
    let [famille2 , setFamille2 ] =  useState([])

    // STATE FOR INPUT FOR NAF(Autocomplete)
    const [autonaf, setAutonaf ] = useState(false)
    let [autnafinputValue, setAutnafinputValue] = useState('')
    
    useEffect(() => {
        axios.post(URL).then((response) => {
            setFamille2(response.data.PurchaseFamille2);

            console.log(response.data)
        });
      }, [URL]);

      const skillsOptions = famille2.map((famille2, index) => ({
        id: index + 1,
        label: famille2
      }))

      console.log('value autnafinputValue --=', autnafinputValue)
      console.log(typeof(autnafinputValue))
      console.log(autnafinputValue.length)
      console.log('flag autonaf----=', autonaf)

  return (
    <div>
{/* 
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}> */}
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
                        options={skillsOptions}

                        renderInput={(params) => <TextField {...params} 
                        // variant="outlined" 
                        size="small"
                        // margin="normal"
    
                        fullWidth
                        id="purchasefamily2"
                        label="Achat famille 2"
                        name="purchasefamily2"
                        autoFocus
                        />}

                        /> 


            {/* </Grid> */}

            {/* <Grid item xs={12} sm={4}>
                <CountrySelect/>
            </Grid> */}
        {/* </Grid> */}
        
        
        {/* {autonaf && <NafForm famille2 = {autnafinputValue}></NafForm>} */}

        {autonaf=== true  ? <NafForm famille2 = {autnafinputValue}></NafForm> : null} 
        {/* { autnafinputValue.length === 0  ? <h6>No data</h6> : null}  */}
        

        {/* <NafForm famille2 = {autnafinputValue} autonaf ={autonaf}></NafForm> */}

        {/* {()=>{
          if(autonaf === true){
            return(
              <NafForm famille2 = {autnafinputValue}></NafForm>
            )
          }else{
            return(
              <p>NOT ENOUGH DATA TO PREDICT</p>
            )
          }
        }} */}


    </div>
  )
}

export default SecondSearchbar
