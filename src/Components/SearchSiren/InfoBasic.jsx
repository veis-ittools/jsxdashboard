
import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography } from "@mui/material";
// import Header from '../Header';
import axios from "axios";

function InfoBasic(props) {
    let sirenvar = props.inputsiren
    let pastedsiren = props.pastedsiren

    console.log('from child, ', sirenvar)


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    // const [users, setUsers] = useState([])
    const [flagbasicinfo, setBasicinfo] = useState('')
    const [allBasicinfo, setallBasicinfo] = useState([])


    if(typeof pastedsiren !== "undefined"){
        let baseURL = `https://veis-ittools.com:9100/FR/dashboard/data/${pastedsiren}`
        console.log(baseURL)
        // setBasicinfo(baseURL)
    }
    return baseURL
        
    if (flagbasicinfo === true){
        

    }
    


    const [apiresponse, setApiresponse] = useState(null)
  
    useEffect(() => {
    

      axios.post(baseURL).then((response) => {

        setApiresponse(response.data);
        // setBasicinfo(true);
        console.log(response.data.basicinfo)


      });
    }, [baseURL]);


    // if (flagbasicinfo === true){


    //     Object.entries(apiresponse.basicinfo).map(([key, value]) => {
    //         // Pretty straightforward - use key for the key and value for the value.
    //         // Just to clarify: unlike object destructuring, the parameter names don't matter here.
    //         console.log(key)
    //         console.log(value)

    //     })}

    


    // console.log('NAme --s', apiresponse.basicinfo.Name)

  return (
    <Box  justifyContent='center' >
      siren - {sirenvar} 
      pasted -{pastedsiren}
      
      

      {/* pasted -{pastedsiren}
      {/* <div>
        {apiresponse.basicinfo.map(item => 
          <div>
            <p>{item.Name} </p>
          </div>
        )}
      </div> */}
      {/* {allBasicinfo} */}
      
      
    </Box>
  )
}

export default InfoBasic
