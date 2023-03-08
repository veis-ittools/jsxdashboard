import React, { useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, Grid, TextField, IconButton, useTheme } from "@mui/material";

function BasicInfo() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
  return (

    <Box backgroundColor={colors.primary[400]}  justifyContent='center' 
        sx={{
            marginTop: 0,
            marginLeft: 5,
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
  )
}

export default BasicInfo