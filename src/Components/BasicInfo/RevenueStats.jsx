
import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
// import Header from '../Header';
import axios from "axios";
import FourCharts from './FourCharts';
import Alert from '@mui/material/Alert';
import DataGridRev from './DataGridRev';

// const addId=(arr)=> {
//   return arr.map((obj, index)=>  {
//     return ({...obj,id: index })
//   });
// };


function RevenueStats(props) {  
    let siren = props.siren
    siren = siren.toString()
    siren = siren.replace(/['" ]+/g, '');



    if (siren.length > 9) {
      siren = siren.slice(0, 9);
    }
    
    const theme = useTheme();


    // API CALL TO GET REV STATS
    // let urlchange = `https://veis-ittools.com:9100/FR/forcharts/revenue/`
    let urlchange = `https://veis-ittools.eu/FR/forcharts/revenue/${siren}`
    console.log(urlchange);
    // let urlchange = 'https://veis-ittools.com:9100/FR/dashboard/data/%20%20535297121'

    
    const [users, setUsers] = useState([])
    const [revinseerecs, setInseerecs] = useState([])

    // states for charts

    const [cachart, setCachart] = useState([])
    const [resultatchart, setResultatchart] = useState([])
    const [effectifchart, setEffectifchart] = useState([])
    const [date, setDate] = useState([])


    // data fromae rev datagrid

    const [datarev, setDatarev] =  useState([])
    let [drev, setDrev] =  useState([])
    const [dataflag, setDataflag] = useState(false)

    

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
          setDate(response.data.revdetails.date)

        console.log('revenue api response--', response.data)
        console.log('--REVENUE-----',response.data.revdetails.date)
        // //   console.log(typeof((response.data.revdetails)))
        //   console.log(typeof(revinseerecs));
        //   console.log('here from now');

        console.log('chart CA', cachart)
        console.log('type', typeof(cachart))
      })
    }
    // API CODE CLOSE




    // TOTAL ESTABLISHMENTS API CALL--------------
    // let Turlchange = 'https://veis-ittools.com:9100/FR/dashboard/data/'
    // let Turlchange = `https://veis-ittools.com:9100/FR/dashboard/data/${siren}`
    let Turlchange = `https://veis-ittools.eu/FR/dashboard/data/${siren}`
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



    // datagrid fro rev start
    let revdatarecs =  null
    let Durlchange = `https://veis-ittools.eu/FR/enterprise/data/${siren}`
    console.log(Durlchange);
    // let urlchange = 'https://veis-ittools.com:9100/FR/dashboard/data/%20%20535297121'
    
    
    useEffect(() => {
        DfetchData();
      }, [Durlchange]);
    
      const DfetchData = () => {
        // setApiurl(apiurltocall[0])
        console.log('---Total records--')
        axios.post(Durlchange).then((response) => {
            setDatarev(response.data.revenue)
            setDataflag(dataflag===true)

            console.log(response.data.revenue)
            console.log(typeof((response.data.revenue)))
            console.log(typeof(datarev));
            console.log('here from now');

            // response.data.revenue && Object.entries(
            // let revdatarecs = addId(datarev)

            response.data.revenue && Object.entries(response.data.revenue).map(([key, value]) => {
              return setDrev(value)
            })

      })
    }


    console.log('okali', drev)
    // drev.id = 1
    console.log('okali 2', drev)
    console.log('flag ', dataflag);



    
    
    // datarev && Object.entries(datarev).map(([key, value]) => {
    //   return 
      
      
    // })
   
   



  return (
    <Box  justifyContent='center' marginTop={1}>


        {revinseerecs && <FourCharts records= {revinseerecs.CA} 
                    resultat = {revinseerecs.RESULTAT}
                    effective = {revinseerecs.EFFECTIF}
                    totalrec = {totalrec}
                    year = {revinseerecs.year}
                    cachart= {cachart}
                    resultatchart= {resultatchart}
                    effectifchart= {effectifchart}
                    date = {date}

                    /> }

        
        {revinseerecs === null ?  
        <Alert severity="error">Revenue details not available</Alert>  
        : null}

         {datarev !== undefined && revinseerecs !== null ? <DataGridRev datarev = {datarev} ></DataGridRev>
        : null}  






        
    </Box>
 
  )
}

export default RevenueStats
