import React, { useState } from 'react'
import { Box, Button ,TextField, useTheme } from "@mui/material";


// import { Box, useTheme } from "@mui/material";
// import { Box, Button, IconButton, Typography,TextField, useTheme } from "@mui/material";

import { tokens } from "../../theme";
import Header from '../../Components/Header';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";

import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StatBox from '../../Components/StatBox';
import TrafficIcon from "@mui/icons-material/Traffic";
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import ApexCharts from '../ApexCharts';
import PercentDiffer from '../PercentDiffer';
import ResultantChart from '../ResultantChart';

// const data = [

//     {
//       "name": "2020",
//       "Chiffre d'affaires": 71154803,
  
//     },
//     {
//       "name": "2019",
//       "Chiffre d'affaires": 91027987,
  
//     },
//     {
//       "name": "2018",
//       "Chiffre d'affaires": 140469088,
  
//     },
//     {
//       "name": "2017",
//       "Chiffre d'affaires": 164462307,
  
//     },
//     {
//       "name": "2016",
//       "Chiffre d'affaires": 169873083,
//     },
  
  
//   ]
  

function FourCharts(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    let records = props.records
    let resultat = props.resultat
    let totalrec = props.totalrec
    let effective = props.effective
    let year = props.year

    let cachart = props.cachart
    let resultatchart = props.resultatchart
    let effectifchart = props.effectifchart
    

    console.log('CA---', cachart)
    console.log('resultat---', resultat)
    console.log('etablishs---', totalrec)
    console.log('year---', year)

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-around" alignItems="center"   >
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="120px"
          gap="20px"
        >
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title= {records}
              subtitle="Chiffre d'affaires"
              progress="0.75"
            //   increase="+14%"
              icon={
                <EuroSymbolIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title= {resultat}
              subtitle="Résultat"
              progress="0.50"
            //   increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={effective}
              subtitle="Effectif "
              progress="0.30"
            //   increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={totalrec}
              subtitle="établissement(s)"
              progress="0.80"
            //   increase="+43%"
              icon={
                <LocationCityIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>         
        </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="350px"
          gap="20px"
          marginTop={2}
        >
            <Box
              gridColumn="span 4"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >

              <ApexCharts data= {cachart}></ApexCharts>
            </Box>

            <Box
              gridColumn="span 4"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >

              <ResultantChart data= {resultatchart}></ResultantChart>
            </Box>

            <Box
              gridColumn="span 4"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >

              <PercentDiffer data= {effectifchart}></PercentDiffer>
            </Box>

          </Box>




        </Box> 



        

  )
}

export default FourCharts
