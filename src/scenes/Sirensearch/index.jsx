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


import BasicInfo from '../../Components/BasicInfo/BasicInfo';
import RevenueStats from '../../Components/BasicInfo/RevenueStats';

import ApexCharts from '../../Components/ApexCharts';

import PercentDiffer from '../../Components/PercentDiffer';
import ResultantChart from '../../Components/ResultantChart';
// data for rev
// 

const data = [

  {
    "name": "2020",
    "Chiffre d'affaires": 71154803,

  },
  {
    "name": "2019",
    "Chiffre d'affaires": 91027987,

  },
  {
    "name": "2018",
    "Chiffre d'affaires": 140469088,

  },
  {
    "name": "2017",
    "Chiffre d'affaires": 164462307,

  },
  {
    "name": "2016",
    "Chiffre d'affaires": 169873083,
  },


]



const Sirensearch= () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [siren, setSiren] = useState('')
    const [buttonclickstate, setButtonclickstate]  = useState(false)




  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-around" alignItems="center"   >
            <Header title="Enterprise Search" subtitle="Search using the SIREN for Suppliers in France (Section under Develpment*)" />

            <Box   
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
                >
                
                <TextField
                    variant="standard"
                    name="siren"
                    label="Enter SIREN"
                    size="small"
                    id = 'siren'
                    sx={{ marginTop:1,
                    mx:5 }}
                    onChange= {(e)=>{
                        console.log(e.target.value);
                        setSiren(e.target.value)
                        
                    }}
                    
                    />


                    


                <Button
                    onClick={setButtonclickstate}
                    sx={{
                    backgroundColor: colors.blueAccent[600],
                    color: colors.grey[100],
                    fontSize: "13px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    // marginRight: "150px"
                    }}
                    
                >
                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                    Search Supplier
                </Button>


            </Box>

        </Box>
        {buttonclickstate && <BasicInfo siren = {siren}></BasicInfo> }
        {buttonclickstate && <RevenueStats siren = {siren}></RevenueStats> }


        {/* <BasicInfo siren = {siren}></BasicInfo>  */}

        {/* <BasicInfo></BasicInfo> */}
        
        {/* 4 SMALL BOXES */}
        {/* -------------------------START----------------------------- */}
        {/* GRID & CHARTS */}  {/* ROW 1 */} 
        
        {/* <Box
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
              title="€71,154,803"
              subtitle="Chiffre d'affaires"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
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
              title="€59,865,496"
              subtitle="Résultat"
              progress="0.50"
              increase="+21%"
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
              title="59"
              subtitle="Effectif "
              progress="0.30"
              increase="+5%"
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
              title="89"
              subtitle="établissement(s)"
              progress="0.80"
              increase="+43%"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Box> */}
        
        {/* 4 SMALL BOXES */}
        {/* -------------------------END----------------------------- */}
        {/* GRID & CHARTS */}  {/* ROW 1 */}


          {/* 3 charts revenue  */}
        {/* --------------------START=------------------------- */}
        {/* <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="275px"
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

            <ApexCharts data= {data}></ApexCharts>
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >

            <PercentDiffer ></PercentDiffer>
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ResultantChart></ResultantChart>
          </Box>
        </Box>        
   */}
      
      
          
       
           
        {/* --------------------END=------------------------- */}    
    </Box>

    
  )
}

export default Sirensearch