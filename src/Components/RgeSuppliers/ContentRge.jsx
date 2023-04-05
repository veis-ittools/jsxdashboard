import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography, Grid, IconButton, Link } from "@mui/material";
import Alert from '@mui/material/Alert';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ContentRge(props) {



    let rgerows = props.rgerows
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);  
    
    
    console.log('from new rge', rgerows);
    let cert = rgerows.url_qualification
  
  
  
    return (

    <Box>
        <Box marginTop={-3} paddingBottom={5} display="column" justifyContent="left" alignItems="center"   >
            <Typography
                variant="h5"
                color={colors.grey[100]}
                // fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                Main Sector - {rgerows.meta_domaine}        
            </Typography >
            <Typography variant="h5" color={colors.grey[100]}>
                Sub Sector - {rgerows.domaine}
            </Typography>
            <Stack direction="row" alignItems="center" gap={2}>
                {/* <Alert severity="success">RGE Certificate</Alert>  */}
                <Typography variant="h5">RGE Certificate {rgerows.nom_certificat}</Typography>
                <Avatar sx={{  bgcolor: 'secondary.main' }}>
                <WorkspacePremiumIcon  onClick={event =>  window.open(cert)} />
                </Avatar> 
                <Typography variant="h5">email- {rgerows.email}</Typography>
                <Typography variant="h5">website- {rgerows.site_internet}</Typography>
   



            </Stack>

            <Grid marginTop={0} alignContent={'center'} container spacing={3}
              >
              <Grid item xs={12} sm={12}>
                  <Typography variant="h5" color={colors.blueAccent[100]}>
                      {/* 2169 BD DE LA DEFENSE NANTERRE HAUTS-DE-SEINE ILE-DE-FRANCE 92000 */}
                      {rgerows.adresse} {rgerows.commune}
                </Typography>
                {/* <Alert sx = {{width: 1/4}} severity="success">Active</Alert> */}
              </Grid>

            </Grid>

        </Box>
    </Box>

  )

}
export default ContentRge