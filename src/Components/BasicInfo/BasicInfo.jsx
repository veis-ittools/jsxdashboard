
import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography, Grid } from "@mui/material";
import { sizing } from '@mui/system';


import Alert from '@mui/material/Alert';

// import Header from '../Header';
import axios from "axios";


function BasicInfo(props) {

    let siren = props.siren


    console.log('from new comp', siren)

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);



    // BASIC INFORMATION API CALL CODE START------
    let urlchange = `https://veis-ittools.com:9100/FR/dashboard/data/${siren}`
    console.log(urlchange);
    // let urlchange = 'https://veis-ittools.com:9100/FR/dashboard/data/%20%20535297121'

    
    const [users, setUsers] = useState([])
    const [inseerecs, setInseerecs] = useState([])

    useEffect(() => {
      fetchData();
    }, [urlchange]);
  
    const fetchData = () => {
      // setApiurl(apiurltocall[0])
      console.log('INSEE API CODE -----')
      axios.post(urlchange).then((response) => {
          setUsers(response.data);
          setInseerecs(response.data.basicinfo)
          console.log(response.data.basicinfo)
          console.log(typeof((response.data.basicinfo)))
          console.log(typeof(inseerecs));
          console.log('here from now');
      })
    }


    
    
    
    // BASIC INFORMATION API CALL CODE START------



  if (!users) return null; 
  
  return (

    // <Box backgroundColor={colors.primary[400]}  justifyContent='center' 
    <Box  justifyContent='center' 
        sx={{
            marginTop: -3,
            marginLeft: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            borderRadius: 2,
            width: 830,
            height: 200, 
            
            
        }}
    > 
      {/* <Header title="Présentation de la société VINCI ENERGIES" subtitle="Categorie Juridique UniteLegale SA à conseil d'administration (s.a.i.)" /> */}
      {inseerecs && Object.entries(inseerecs).map(([key, value]) => {
          // Pretty straightforward - use key for the key and value for the value.
          // Just to clarify: unlike object destructuring, the parameter names don't matter here.
          console.log('key--', key)
          console.log('value--', value)
          console.log('ESS value--', value.ESS)


          return (
            <Box>

              <Box display="flex" justifyContent="left" alignItems="center"   >
         
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  // fontWeight="bold"
                  sx={{ m: "0 0 5px 0" }}
                >
                  Présentation de la société {value.Name}  
                </Typography >
                  {/* <Alert sx = {{width: 1/8, height: '50%'}} severity="success">Active</Alert>     */} 
                  {value.Status === "A" ? (
                    <Alert sx = {{width:'13%', height: '25%', marginLeft:2, maxHeight:'25%'}} severity="success">Active</Alert>    
                  ) : (
                    <Alert sx = {{width:'13%', height: '25%', marginLeft:2, maxHeight:'25%'}} severity="error">inactive</Alert>      
                  )}
              
              
              </Box>



              <Typography variant="h5" color={colors.greenAccent[400]}>
                  Categorie Juridique UniteLegale- {value.categorieJuridiqueUniteLegale}
              </Typography>

              <Typography variant="h5" color={colors.greenAccent[400]}>
                  Spécialisée dans le secteur d'activité- {value.Description} - {value.NAF}
              </Typography>

              <Grid marginTop={0} alignContent={'center'} container spacing={1}
              >
              <Grid item xs={12} sm={3}>
                  <Typography variant="h5" color={colors.blueAccent[100]}>
                    SIREN: {value.SIREN}  
                  </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                  <Typography variant="h5" color={colors.blueAccent[100]}>
                    SIRET: {value.SIRET} 
                  </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant="h5" color={colors.blueAccent[100]}>
                    {value.Category}  {value.salaries}  salariés | ESS: {value.ESS} 
                  </Typography>

              </Grid>
              {/* <Grid item xs={12} sm={3}>
                  <Typography variant="h5" color={colors.blueAccent[100]}>
                      {value.salaries}  salariés | ESS: {value.ESS}   
                  </Typography>

              </Grid> */}
            
            </Grid>
            
            
            <Grid marginTop={0} alignContent={'center'} container spacing={3}
              >
              <Grid item xs={12} sm={12}>
                  <Typography variant="h5" color={colors.blueAccent[100]}>
                      {/* 2169 BD DE LA DEFENSE NANTERRE HAUTS-DE-SEINE ILE-DE-FRANCE 92000 */}
                      {value.address}
                </Typography>
                {/* <Alert sx = {{width: 1/4}} severity="success">Active</Alert> */}
              </Grid>

            </Grid>

            </Box>
            

          );
        })}  






      {/* <Typography
        variant="h3"
        color={colors.grey[100]}
        // fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        Présentation de la société VINCI ENERGIES
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
          Categorie Juridique UniteLegale- SA à conseil d'administration (s.a.i.)
      </Typography>

      <Typography variant="h5" color={colors.greenAccent[400]}>
          
          Spécialisée dans le secteur d'activité- 
      </Typography> */}
      {/* <Typography variant="h5" color={colors.blueAccent[400]}>
          Sur l'année 2020, VINCI ENERGIES réalise un chiffre d'affaires de 71154803 €.
      </Typography> */}

      
      {/* <Typography variant="h5" color={colors.blueAccent[100]}>
        SIREN: 391635844  SIRET: 39163584400288
      </Typography>

      
      <Typography variant="h5" color={colors.blueAccent[100]}>
         50 à 99 salariés  Category Grande (GE)
      </Typography> */}

      {/* <Grid marginTop={0} alignContent={'center'} container spacing={1}
        >
        <Grid item xs={12} sm={3}>
            <Typography variant="h5" color={colors.blueAccent[100]}>
              SIREN: 391635844  
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography variant="h5" color={colors.blueAccent[100]}>
              SIRET: 39163584400288 
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography variant="h5" color={colors.blueAccent[100]}>
              Enterprise- Grande (GE)
            </Typography>

        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography variant="h5" color={colors.blueAccent[100]}>
              50 à 99 salariés ESS: NA  
            </Typography>

        </Grid>
      
      </Grid>
      
      
      <Grid marginTop={0} alignContent={'center'} container spacing={1}
        >
        <Grid item xs={12} sm={12}>
            <Typography variant="h5" color={colors.blueAccent[100]}>
                2169 BD DE LA DEFENSE NANTERRE HAUTS-DE-SEINE ILE-DE-FRANCE 92000
          </Typography>
        </Grid>

      </Grid>
    */}





    </Box>
  )
}

export default BasicInfo