
import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography } from "@mui/material";
// import Header from '../Header';
import axios from "axios";

import BoxTop from './BoxTop';

function InfoBasic(props) {
    let sirenvar = props.inputsiren
    let pastedsiren = props.pastedsiren
    console.log(pastedsiren);

    let urlchange = `https://veis-ittools.com:9100/FR/dashboard/data/${pastedsiren}`
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


  


    // Object.entries(inseerecs.basicinfo).map(([key, value]) => {
    //     // Pretty straightforward - use key for the key and value for the value.
    //     // Just to clarify: unlike object destructuring, the parameter names don't matter here.
    //     console.log(key)
    //     console.log(value)

    // })

  if (!users) return null; 

  return (
    <Box  justifyContent='center' >


        {inseerecs && Object.entries(inseerecs).map(([key, value]) => {
          // Pretty straightforward - use key for the key and value for the value.
          // Just to clarify: unlike object destructuring, the parameter names don't matter here.
          console.log('key--', key)
          console.log('value--', value)
          console.log('value--', value.Name)

          return (
            <Box>
              <h2>{value.Name}</h2>
              <p>
                'Category' : {value.Category}
              </p>
              <BoxTop></BoxTop>
            </Box>
            

          );
        })}





      {inseerecs && Object.entries(inseerecs).map(([key, value]) => {
            // Pretty straightforward - use key for the key and value for the value.
            // Just to clarify: unlike object destructuring, the parameter names don't matter here.
            console.log('key--', key)
            console.log('value--', value)
            console.log('value--', value.Name)

        })}      
      {/* <h2>{objectData[0].Name}</h2>
      <p>Category: {objectData[0].Category}</p>
      <p>Address: {objectData[0].Addressline1} {objectData[0].Addressline2} {objectData[0].Addressline3}</p>
      <p>Region: {objectData[0].Région}</p>
      <p>Department: {objectData[0]["Code Département"]}</p>
      <p>Postal Code: {objectData[0]["Code Postal"]}</p>
      <p>Description: {objectData[0].Description}</p>
      <p>Link: <a href={objectData[0].link} target="_blank" rel="noreferrer">{objectData[0].link}</a></p> */}

      
    </Box>
  )
}

export default InfoBasic
