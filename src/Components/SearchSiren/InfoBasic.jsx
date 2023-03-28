
import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography } from "@mui/material";
// import Header from '../Header';
import axios from "axios";

function InfoBasic(props) {
    let sirenvar = props.inputsiren
    let pastedsiren = props.pastedsirenvar

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const [users, setUsers] = useState([])
    const [inseerecs, setInseerecs] = useState()
    const [cfrecs, setCFrecs] = useState()


    // let baseURL = `https://veis-ittools.com:9100/FR/dashboard/data/${pastedsiren}`
    // let baseURL = 'https://veis-ittools.com:9100/FR/dashboard/data/391635844'
    // let baseURL = `https://veis-ittools.com:5900/FR/enterprise/data/${sirenvar}`
    let baseURL = `https://veis-ittools.com:5900/FR/enterprise/data/391635844`

    // let cfbaseURL = `https://veis-ittools.com:5900/FR/enterprise/data/${sirenvar}`



    console.log(baseURL)
    useEffect(() => {
        axios.post(baseURL).then((response) => {
            setUsers(response.data);
            setInseerecs(response.data.INSEE);
          console.log(response.data.Chiffredaffaires
          )
          console.log('here from now')
          console.log(inseerecs)

        });
      }, [baseURL]);


  return (
    <Box  justifyContent='center' >

      {/* {sirenvar} */}
      {pastedsiren}
    </Box>
  )
}

export default InfoBasic
