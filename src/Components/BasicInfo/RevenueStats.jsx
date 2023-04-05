
import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography, Grid } from "@mui/material";
// import Header from '../Header';
import axios from "axios";
import FourCharts from './FourCharts';
import Alert from '@mui/material/Alert';

function RevenueStats(props) {  
    let siren = props.siren

    if (siren.length > 9) {
      siren = siren.slice(0, 9);
    }
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    // API CALL TO GET REV STATS
    let urlchange = `https://veis-ittools.com:9100/FR/forcharts/revenue/${siren}`
    console.log(urlchange);
    // let urlchange = 'https://veis-ittools.com:9100/FR/dashboard/data/%20%20535297121'

    
    const [users, setUsers] = useState([])
    const [revinseerecs, setInseerecs] = useState([])

    // states for charts

    const [cachart, setCachart] = useState([])
    const [resultatchart, setResultatchart] = useState([])
    const [effectifchart, setEffectifchart] = useState([])




    useEffect(() => {
      fetchData();
    }, [urlchange]);
  
    const fetchData = () => {
      // setApiurl(apiurltocall[0])
      console.log('--REVENUE---')
      axios.post(urlchange).then((response) => {
          
          setUsers(response.data);
          setInseerecs(response.data.revdetails)
          setCachart(response.data.CA)
          setResultatchart(response.data.Resultat)
          setEffectifchart(response.data.Effectif)

        console.log('revenue api response--', response.data)
        //   console.log('--REVENUE-----', response.data.revdetails)
        // //   console.log(typeof((response.data.revdetails)))
        //   console.log(typeof(revinseerecs));
        //   console.log('here from now');

        console.log('chart CA', cachart)
        console.log('type', typeof(cachart))
      })
    }
    // API CODE CLOSE




    // TOTAL ESTABLISHMENTS API CALL--------------
    let Turlchange = `https://veis-ittools.com:9100/FR/dashboard/data/${siren}`
    console.log(Turlchange);
    // let urlchange = 'https://veis-ittools.com:9100/FR/dashboard/data/%20%20535297121'
    const [totalrec, setTotalrecs] = useState()

    useEffect(() => {
        TfetchData();
      }, [Turlchange]);
    
      const TfetchData = () => {
        // setApiurl(apiurltocall[0])
        console.log('---Total records--')
        axios.post(Turlchange).then((response) => {
            setTotalrecs(response.data.Totalrecords)
            console.log(response.data.Totalrecords)
            console.log(typeof((response.data.Totalrecords)))
            console.log(typeof(totalrec));
            console.log('here from now');
      })
    }



    // TOTAL ESTABLISHMENTS API CALL END-------
  return (
    <Box  justifyContent='center' marginTop={-2}>


        {revinseerecs && <FourCharts records= {revinseerecs.CA} 
                    resultat = {revinseerecs.RESULTAT}
                    effective = {revinseerecs.EFFECTIF}
                    totalrec = {totalrec}
                    year = {revinseerecs.year}
                    cachart= {cachart}
                    resultatchart= {resultatchart}
                    effectifchart= {effectifchart}

                    /> }

        
        {revinseerecs === null ?  
        <Alert severity="error">Revenue details not available</Alert>  
        : null} 






        
    </Box>
 
  )
}

export default RevenueStats
