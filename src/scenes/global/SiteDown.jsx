import React from 'react'
import { tokens } from "../../theme";

import { Box, IconButton, Typography, useTheme } from "@mui/material";

import Imgsrc from './sitedown.png'

function SiteDown() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (

    <div >
        <Box sx={{ justifyContent: 'center', alignItems: 'center'}} marginTop={15} marginLeft={5} >
            <Typography variant="h4" component="h1" >
                Site Maintenance
            </Typography>
            <Typography variant="body1" >
                We are currently performing maintenance on the site to bring you new updates.
                Please check back later.
            </Typography>


            <Box
                  component="img"
                  sx={{
                    height: 150,
                    width: 150,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  // src = './Logo-Vinci-Energies.jpg'
                  src= {Imgsrc}
                  // 
                  // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />

        </Box>

    </div>      
    // <div>
    //     SITE DOWN
    // </div>
  )
}

export default SiteDown
