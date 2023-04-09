import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography, Grid, IconButton, Link, Tooltip  } from "@mui/material";
import Alert from '@mui/material/Alert';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LanguageIcon from '@mui/icons-material/Language';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

// import { makeStyles } from '@material-ui/core/styles';
// import { keyframes } from 'styled-components';

// const shakeAnimation = keyframes`
//   0% { transform: rotate(0deg); }
//   25% { transform: rotate(20deg); }
//   50% { transform: rotate(0deg); }
//   75% { transform: rotate(-20deg); }
//   100% { transform: rotate(0deg); }
// `;



function ContentRge(props) {

    // const useStyles = makeStyles({
    //     shakeIcon: {
    //       '&:hover': {
    //         animation: `${shakeAnimation} 0.5s ease`,
    //       },
    //     },
    //   })
    
    // const classes = useStyles();


    let rgerows = props.rgerows
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);  
    
    
    console.log('from new rge', rgerows);
    let cert = rgerows.url_qualification
    let website = rgerows.site_internet

    console.log('i want--', website);
  
  
  
    return (

    <Box>
        <Box marginTop={1} paddingBottom={5} display="column" justifyContent="left" alignItems="center"   >

        <Alert sx = {{ marginLeft:2}} severity="success">RGE Certification information</Alert> 


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
            <Typography variant="h5" color={colors.grey[100]}>
                Code qualification - {rgerows.code_qualification}
            </Typography>
            <Typography variant="h5" color={colors.grey[100]}>
                Nom qualification - {rgerows.nom_qualification}
            </Typography>

            <Stack direction="row" alignItems="center" gap={2}>
                {/* <Alert severity="success">RGE Certificate</Alert>  */}
                <Typography variant="h5">RGE Certificate {rgerows.nom_certificat} Click here to view -</Typography>
                <Avatar sx={{  bgcolor: 'secondary.main' }}>
                    <Tooltip title="Click the icon to see the certificate">    
                        <WorkspacePremiumIcon   onClick={event =>  window.open(cert)} />
                    </Tooltip>
                </Avatar> 
                
                <Typography variant="h5">email- {rgerows.email}</Typography>

                <div>
                    {website != null ? (
                        <div>
                        <Typography variant="h5"> visit website here</Typography>
                        <Tooltip title="Click the icon to visit website">
                            <Avatar sx={{  bgcolor: 'secondary.main' }}>
                                <LanguageIcon  onClick={event =>  window.open(website)} />
                            </Avatar> 
                        </Tooltip>
                        </div>
                    ) : (
                        <Alert sx={{width:'13%', height: '25%', marginLeft:2, maxHeight:'25%'}} severity="error">No Website</Alert>      
                    )}
                    </div>

                {/* <Typography variant="h5"> visit website here</Typography>
                <Avatar sx={{  bgcolor: 'secondary.main' }}>
                    <LanguageIcon  onClick={event =>  window.open(website)} />
                </Avatar> */}

                <Avatar sx={{  bgcolor: 'secondary.main' }}>
                    <ContactPhoneIcon  ></ContactPhoneIcon>
                </Avatar>
                <Typography variant="h5"> {rgerows.telephone}</Typography>  
            </Stack>

            <Grid marginTop={0} alignContent={'center'} container spacing={3}
              >
              <Grid item xs={12} sm={12}>
                  <Typography variant="h5" color={colors.blueAccent[100]}>
                      {/* 2169 BD DE LA DEFENSE NANTERRE HAUTS-DE-SEINE ILE-DE-FRANCE 92000 */}
                      Address : {rgerows.adresse} {rgerows.commune} {rgerows.code_postal}
                </Typography>
                {/* <Alert sx = {{width: 1/4}} severity="success">Active</Alert> */}
              </Grid>

            </Grid>

        </Box>
    </Box>

  )

}
export default ContentRge