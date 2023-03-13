
import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
// import DataSource from '../../Components/MainSearch/DataSource';
// import CompanySize from '../../Components/MainSearch/CompanySize';
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import Switch from '@mui/material/Switch';
// import Apitest from '../ApiCall/Apitest';
// import BIapicall from '../ApiCall/BIapicall';

import Apirouting from '../ApiCall/Apirouting';
// import { Troubleshoot } from '@mui/icons-material';

function NafForm(props) {



    // let apiparams = {}
    let famille2 = props.famille2
    console.log(famille2)
    let [apiparams2, setApiparams] = useState()
    let [formcomplete, setFromcomplete] = useState(false)
    let [dataBI, setDataBI] = useState(false)
    // let [dataINSEE, setDataINSEE] = useState(false)

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let apiparams =     
            {
                naf: data.get('naf'),
                location: data.get('location'),
                ESS: data.get('ESS'),
                datasource: data.get('datasource'),
                companysize: data.get('companysize'), 
                'iscomplete': true
    
            }
        // {...apiparams, iscomplete: 'true' }
       
        setApiparams(apiparams)
        setFromcomplete(true)

        // console.log('APIPARAMS--', apiparams2)
        // if (apiparams.datasource === 'BI'){
        //     setDataBI(true)
        //     setDataINSEE(false)
        // }
        // if (apiparams.datasource === 'INSEE'){
        //     setDataINSEE(true)
        //     setDataBI(true)
        // }

        }

// ===================================NAFCODE OPEN=====================================================

        let URL = `https://veis-ittools.com:5900/BI/getnafsfrombi/${famille2}`
        console.log(URL)

        // STATE FOR NAF
        let [inputnaf , setInputnaf ] =  useState({})
        const [nafflag, setNafflag] = useState(false)

        
        // STATE FOR AUTOCOMPLETE INPUT NAF
        let [storenaf, setStorenaf] = useState('')
        
        useEffect(() => {
            axios.post(URL).then((response) => {
                // console.log(response)
                setInputnaf(response.data.NAFS);
                setNafflag(true)
                // console.log(response.data)

            });
          }, [URL]);
        
        //   const nafOptions = inputnaf.map((inputnaf, index) => ({
        //     id: index + 1,
        //     label: famille2
        //   }))
    
        console.log('value i want', inputnaf)
// ===================================NAFCODE END=====================================================

// ===================================REGION OPEN=====================================================
        let regionurl = 'https://veis-ittools.com:5900/FR/Regions/'
        // state region
        let [inputRegion, setRegion] = useState([])
        // state to store after search, dynamic inputs
        let [storeregion, setStoreregion] = useState('')

        useEffect(() => {
            axios.get(regionurl).then((response) => {
                // console.log(response)
                setRegion(response.data.Regions);
                // console.log(response.data)

            //     let regionOptions = inputRegion.map((inputRegion, index) => ({
            //     id: index + 1,
            //     label: inputRegion
            // })) 

            });
          }, [regionurl]);

        const regionOptions = inputRegion.map((inputRegion, index) => ({
            id: index + 1,
            label: inputRegion
          }))  
        console.log(typeof(regionOptions))
        // if (nafflag === true){
        //     const regionOptions = inputRegion.map((inputRegion, index) => ({
        //     id: index + 1,
        //     label: inputRegion
        //   }))  
        // // console.log(typeof(regionOptions))
        // }
        // console.log(typeof(regionOptions))


        // --------------------------button----------------------
        let [buttonclickstate, setButtonclickstate]  = useState(false)

        const onbuttonClicked = (params) => {
            console.log('APIPARAMS from button clicked--', apiparams2)
            setButtonclickstate(
                !buttonclickstate
                )
            console.log('from button', buttonclickstate);
            setDataBI(
                dataBI === true
            )
            console.log('from button bi flag', dataBI);    
        }

        


  return (
    <div>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: -2  }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              
            <Autocomplete
                        id="combo-box-demo"
                        onChange={(_, newValue) => {
                        // setAutonaf(!autonaf)
                        }}
                        inputValue={storenaf}

                        onInputChange={(_, storenaf) => {
                            setStorenaf(storenaf)
 
                        }}
                        options={inputnaf}

                        renderInput={(params) => <TextField {...params} 
                        // variant="outlined" 
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="naf"
                        label="NAF Recommendation"
                        name="naf"
                        autoFocus
                        />}

                        /> 

            </Grid> 
           <Grid item xs={12} sm={4}>

           <Autocomplete
                        id="combo-box-demo333"
                        onChange={(_, newValue) => {
                        // setAutonaf(!autonaf)
                        }}
                        inputValue={storeregion}

                        onInputChange={(_, storeregion) => {
                        setStoreregion(storeregion)
 
                        }}
                        options={regionOptions}

                        renderInput={(params) => <TextField {...params} 
                        variant="outlined" 
                        size="small"
                        margin="normal"
                        fullWidth
                        id="location"
                        label="City/Province/Region"
                        name="location"
                        autoFocus
                        />}

                        /> 

              {/* <TextField
                  margin="normal"
                  fullWidth
                  name="location"
                  label="City/Province/Region"
                  size="small"
                  id = 'location'
              /> */}
            </Grid>
           </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    {/* <DataSource/> */}

                    <div>
                        <Box sx={{ minWidth: 60, height: '100%'  , marginTop:2.5 }}>
                            <FormControl fullWidth>
                            <InputLabel sx={{ minWidth: 60, height: '100%'}} >
                                DataSource
                            </InputLabel>
                            <NativeSelect
                                defaultValue={'BI'}
                                inputProps={{
                                name: 'datasource',
                                id: 'datasource',
                                }}
                            >
                                {/* <option value={null}>ALL</option> */}
                                <option value={'INSEE'}>INSEE</option>
                                <option value={'BI'}>SAP-BI </option>
                            </NativeSelect>
                            </FormControl>
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    {/* <CompanySize/> */}
                    <div>
                        <Box sx={{ minWidth: 120, height: '100%', marginTop:2.5 }}>
                        <FormControl fullWidth>
                            <InputLabel sx={{ minWidth: 120, height: '100%' }} >
                            Enterprise Size
                            </InputLabel>
                            <NativeSelect
                            defaultValue={'ALL'}
                            inputProps={{
                                name: 'companysize',
                                id: 'companysize',
                            }}
                            >
                            <option value={'PME'}>Small-PME</option>
                            <option value={'ETI'}>Medium-ETI</option>
                            <option value={'GE'}>Large-GE</option>
                            <option value={'ALL'}>ALL</option>
                            </NativeSelect>
                        </FormControl>
                        </Box>      
                    </div>


                </Grid>
                <Grid item xs={12} sm={4}>
                  {/* <FormControlLabel sx={{marginTop:2.5}}
                  control={<Checkbox value="YES" color="primary" />}
                  label="ESS"
                  name='ESS'
                  id = 'ESS'
                  /> */}
                  <FormControlLabel sx={{marginTop:2.5}} control={<Switch color='primary' />} label="L'économie sociale et solidaire (ESS)" value="YES" name='ESS' id='ESS'/>
                </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop:2,  alignContent:'left'}}
              onClick={onbuttonClicked}
            >
              Launch Search
            </Button> 
            {/* {buttonclickstate && <VeisApiex />} */}
            {/* {formcomplete && <Apitest apiparams2= {apiparams2}  />} */}
            {/* {formcomplete && <VeisApiex />} */}
            {/* {if (formcomplete === true) {
                <Apitest apiparams2= {apiparams2} />
                }
                }  */}

            {/* {dataBI && <BIapicall apiparams2= {apiparams2}  />} 
            
            {dataINSEE && <Apitest apiparams2= {apiparams2}  />}  */}
            {/* {buttonclickstate && <Apirouting  apiparams2= {apiparams2} ></Apirouting>} */}
            {/* {buttonclickstate && <Apirouting ></Apirouting>} */}
            {formcomplete && <Apirouting apiparams2= {apiparams2}  ></Apirouting> }
        

        </Box>
    </div>
  )
}

export default NafForm
