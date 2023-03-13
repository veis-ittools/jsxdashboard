import React from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography } from "@mui/material";
// import Header from '../Header';

function BasicInfo(props) {

    let siren = props.siren

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);



  return (

    // <Box backgroundColor={colors.primary[400]}  justifyContent='center' 
    <Box  justifyContent='center' 
        sx={{
            marginTop: 0,
            marginLeft: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2,
            width: 820,
            height: 130, 
            
            
        }}
    > 
      {/* <Header title="Présentation de la société VINCI ENERGIES" subtitle="Categorie Juridique UniteLegale SA à conseil d'administration (s.a.i.)" /> */}
      
      <Typography
        variant="h3"
        color={colors.grey[100]}
        // fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        Présentation de la société VINCI ENERGIES
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
          Categorie Juridique UniteLegale SA à conseil d'administration (s.a.i.)
      </Typography>

      <Typography variant="h5" color={colors.blueAccent[400]}>
          
          Spécialisée dans le secteur d'activité Construction de réseaux électriques et de télécommunications
          Génie civil, 42.22Z     
      </Typography>
      {/* <Typography variant="h5" color={colors.blueAccent[400]}>
          Sur l'année 2020, VINCI ENERGIES réalise un chiffre d'affaires de 71154803 €.
      </Typography> */}
    </Box>
  )
}

export default BasicInfo