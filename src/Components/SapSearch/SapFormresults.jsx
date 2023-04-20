
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
import Apirouting from '../ApiCall/Apirouting';

function SapFormresults(props) {
    
    let famille1 = props.famille1

    // get the fammille 2
    // STATE FOR FAMILE2
    // let URL = `https://veis-ittools.com:5900/BI/purchasefamille2/`
    let URL = `https://veis-ittools.com:5900/BI/purchasefamille2/${famille1}`
    // let headers = {
    //     'accept': 'application/json',
    //     'famille1': famille1
    // }

    let [famille2 , setFamille2 ] =  useState([])
    const [autonaf, setAutonaf ] = useState(false)
    let [autnafinputValue, setAutnafinputValue] = useState('')

    let [apiparams2, setApiparams] = useState()
    let [formcomplete, setFromcomplete] = useState(false)
    let [dataBI, setDataBI] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // const datasource = 'BI'
        
        // console.log({
        //     famille2: data.get('famille2'),
        //     location: data.get('location'),
        //     ESS: data.get('ESS'),
        //     companysize: data.get('companysize'), 
        //     'iscomplete': true
            

        // });

        let apiparams =     
            {
                
                famille2: data.get('famille2'),
                location: data.get('location'),
                ESS: data.get('ESS'),
                companysize: data.get('companysize'), 
                'iscomplete': true,
                'datasource': 'BI'
                
    
            }
        // {...apiparams, iscomplete: 'true' }
       
        setApiparams(apiparams)
        setFromcomplete(true)

        console.log('apiparams----', apiparams)

    };

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

    //   console.log('value autnafinputValue --=', autnafinputValue)
    //   console.log(typeof(autnafinputValue))
    //   console.log(autnafinputValue.length)
    //   console.log('flag autonaf----=', autonaf)



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
        });
    }, [regionurl]);

    const regionOptions = inputRegion.map((inputRegion, index) => ({
        id: index + 1,
        label: inputRegion
    }))  
    console.log(typeof(regionOptions))

    // ===================================X- REGION CLOSE -X=====================================================
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
    
        <Box component="form" marginLeft={1} onSubmit={handleSubmit} noValidate sx={{ mt: 1  }}>
            <Grid container spacing={3}>
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
                    }}
                    options={skillsOptions}

                    renderInput={(params) => <TextField {...params} 
                    // variant="outlined" 
                    size="small"
                    // margin="normal"

                    fullWidth
                    id="famille2"
                    label="famille2"
                    name="famille2"
                    autoFocus
                    required
                    />}

                    /> 

                </Grid>
                
                {/* <Grid item xs={12} sm={4}>

                <div>
                        
                            <FormControl sx={{ m: 0, minWidth: 250 , }}>
                                <InputLabel sx = {{maxHeight:75, minWidth:45}}  >
                                    Country
                                </InputLabel>
                                <NativeSelect
                                defaultValue={'FRANCE'}
                                inputProps={{
                                    name: 'country',
                                    id: 'country',
                                }}
                                >
                                <option value={'FRANCE'}>FRANCE</option>
                                <option value={'SPAIN'}>SPAIN(*inactive)</option>
                                <option value={'PORTUGAL'}>PORTUGAL(*inactive)</option>
                                <option value={'GERMANY(*inactive)'}>GERMANY(*inactive)</option>
                                <option value={'SUD AFRICA(*inactive)'}>SUD AFRICA(*inactive)</option>
                                <option value={'CANADA(*inactive)'}>CANADA(*inactive)</option>
                                <option value={'AUSTRALIA(*inactive)'}>AUSTRALIA(*inactive)</option>

                                </NativeSelect>

                            </FormControl>
                           
                    </div>


                </Grid> */}



            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} marginTop={2}>
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
                        // variant="outlined" 
                        size="small"
                        margin="normal"
                        // fullWidth
                        id="location"
                        label="Region"
                        name="location"
                        
                        />}

                        /> 
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div>
                        <Box sx={{ minWidth: 125, height: '100%', marginTop:2.5 }}>
                            <FormControl fullWidth>
                                <InputLabel sx={{ minWidth: 130, height: '100%' }} >
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
                    <FormControlLabel sx={{marginTop:2.5}} control={<Switch color='primary' />} label="L'économie sociale et solidaire (ESS) [FR Only]" value="YES" name='ESS' id='ESS'/>
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

            {formcomplete && <Apirouting apiparams2= {apiparams2}  ></Apirouting> }

        </Box>







  )
}

export default SapFormresults