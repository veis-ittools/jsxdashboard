import React from 'react'
import { Box, Button, IconButton, Typography,TextField, useTheme } from "@mui/material";
// import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from '../../Components/Header';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Sirensearch= () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center"   >
            <Header title="Enterprise Search" subtitle="Search using the SIREN for Suppliers in France" />

            <Box  backgroundColor={colors.primary[400]}
                borderRadius="3px" >
                
                <InputBase 
                    sx={{ ml: 8, flex: 1, }} 
                    placeholder="SIREN" 
                    size="large"
                    fontSize= "bold"
                    required
                />

                <Button
                    sx={{
                    backgroundColor: colors.blueAccent[700],
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
      
    </Box>
  )
}

export default Sirensearch