import React from 'react'
import { Box, Button, IconButton, Typography,TextField, useTheme } from "@mui/material";
// import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from '../../Components/Header';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";

// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import StatBox from '../../Components/StatBox';
// import TrafficIcon from "@mui/icons-material/Traffic";


import BasicInfo from '../../Components/BasicInfo/BasicInfo';

const Sirensearch= () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-around" alignItems="center"   >
            <Header title="Enterprise Search" subtitle="Search using the SIREN for Suppliers in France" />

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
                    mx:5
         
                    }}
                    />

                <Button
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

        <Box backgroundColor={colors.primary[400]}  justifyContent='center' 
        sx={{
            marginTop: 0,
            // marginLeft: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2,
            width: 820,
            height: 150, 
            
            
        }}
        > 
        basic info
        </Box>





        </Box>

        {/* <BasicInfo></BasicInfo> */}
        
        {/* 4 SMALL BOXES */}
        {/* -------------------------START----------------------------- */}
        {/* GRID & CHARTS */}  {/* ROW 1 */} 
        
        {/* <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
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
              title="12,361"
              subtitle="Emails Sent"
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
              title="431,225"
              subtitle="Sales Obtained"
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
              title="32,441"
              subtitle="New Clients"
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
              title="1,325,134"
              subtitle="Traffic Received"
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



        {/* <BasicInfo></BasicInfo> */}
    </Box>
    
  )
}

export default Sirensearch