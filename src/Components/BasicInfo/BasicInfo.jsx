
import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography, Grid, Tooltip } from "@mui/material";
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

    const [lamarche, setLamarche] = useState(null)
    const [norecfound , setNorecfound] = useState(false)

    useEffect(() => {
      fetchData();
    }, [urlchange]);
  
    const fetchData = () => {
      // setApiurl(apiurltocall[0])
      console.log('INSEE API CODE -----')
      axios.post(urlchange).then((response) => {
          setUsers(response.data);
          setInseerecs(response.data.basicinfo)
          console.log(response.data)
          console.log(typeof((response.data.basicinfo)))
          console.log(typeof(inseerecs));
          console.log('here from now');
      })
    }


    
    
    
    // BASIC INFORMATION API CALL CODE START------


    // LA MARCHE INCLUSIVE START
    let mar_url = `https://veis-ittools.com:9100/lemarche.inclusion/ESAT/${siren}`
    useEffect(() => {
      MfetchData();
    }, [mar_url]);
  
    const MfetchData = () => {
      // setApiurl(apiurltocall[0])
      console.log('INSEE API CODE -----')
      axios.post(mar_url).then((response) => {
        setLamarche(response.data.ESAT)
        setNorecfound(response.data.ESAT.address)

        // console.log('larmache--', response.data.ESAT);
        // console.log('norec clasue--', response.data.ESAT.detail);
        

        

      })
    }

    // let marcheflag = null
    console.log('state', lamarche);
    console.log('state undefin',norecfound );
    // Object.entries(lamarche).map(([key, value]) => {

    //   console.log('key', key);
    //   console.log('val', value.name);
    //   console.log('val', value.is_active);
    //   let marcheflag =  value.is_active 
    //   // setNorecfound(value.is_active )
      
    // })

    //  LA MARCHE STOP


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
          // console.log('key--', key)
          // console.log('value--', value)
          // console.log('ESS value--', value.ESS)
          // console.log('Value.Name', value.Name)
          // console.log(typeof((value.Name)))


          return (
            <Box marginTop={3}>

              <Box display="flex"  justifyContent="left" alignItems="center"   >
         
                {/* <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  // fontWeight="bold"
                  sx={{ m: "0 0 5px 0" }}
                >
                  Présentation de la société {value.Name}        
                </Typography > */}


                {value.Name !== null && value.Name !== undefined ?  (
                        <Typography
                        variant="h3"
                        color={colors.grey[100]}
                        // fontWeight="bold"
                        sx={{ m: "0 0 5px 0" }}
                      >
                        Présentation de la société {value.Name}        
                      </Typography >                  
                    ):(
                        <Typography
                        variant="h3"
                        color={colors.grey[100]}
                        // fontWeight="bold"
                        sx={{ m: "0 0 5px 0" }}
                        >
                        Présentation de la Entrepreneur individuel {value.Sexunit} {value.Prenom2} {value.Prenom3}       
                      </Typography >
                    )
                }
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
                    {value.Category}  {value.salaries}  salariés |  ESS: {value.ESS} 
                  </Typography>

              </Grid>
              {/* <Grid item xs={12} sm={3}>
                  <Typography variant="h5" color={colors.blueAccent[100]}>
                      {value.salaries}  salariés | ESS: {value.ESS}   
                  </Typography>

              </Grid> */}
            
            </Grid>
            
            
            <Grid alignContent={'center'} container spacing={3}
              >
              <Grid item xs={12} sm={12}>
                  <Typography variant="h5" color={colors.blueAccent[100]}>
                      {/* 2169 BD DE LA DEFENSE NANTERRE HAUTS-DE-SEINE ILE-DE-FRANCE 92000 */}
                      {value.Address} {value.commune} {value.Région}
                </Typography>
                {/* <Alert sx = {{width: 1/4}} severity="success">Active</Alert> */}
              </Grid>

            </Grid>
 
            {/* {marcheflag === true ?  (

                <Typography variant="h5" color={colors.blueAccent[100]}>Entreprise sociale inclusive (SIAE ou structure du handicap, GEIQ) - Yes </Typography>):(
                <Typography variant="h5" color={colors.blueAccent[100]}>Entreprise sociale inclusive (SIAE ou structure du handicap, GEIQ) -  Pas trouvé </Typography>
              )}  */}
             
              </Box>
            

          );
        })
        
      }  



      {lamarche && Object.entries(lamarche).map(([key, value]) => {
          return (
            <Tooltip title= "API du marché de l'inclusion">
              <Box>
                {value.is_active === true ?  (
                
                <Typography variant="h5" color={colors.blueAccent[100]}>Entreprise sociale inclusive (SIAE ou structure du handicap, GEIQ) - Yes </Typography>):(
                <Typography variant="h5" color={colors.blueAccent[100]}>Entreprise sociale inclusive (SIAE ou structure du handicap, GEIQ) -  Pas trouvé </Typography>
                )} 

              </Box>
            </Tooltip>
          )
          
        }
        )
      }
      
      


    </Box>
  )
}

export default BasicInfo