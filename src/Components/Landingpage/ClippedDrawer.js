import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';

import { Stack } from '@mui/system';

import MainSearch from '../MainSearch/MainSearch';
import NewSearch from '../MainSearch/NewSearch';

export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        
        <Toolbar>
            
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <TravelExploreRoundedIcon />
          </IconButton>

          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            NAAVIK
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button color='inherit'>Enterprise Search</Button>
            <Button color='inherit'>Documentation</Button>
            <Button color='inherit'>ADMIN</Button>
          </Stack>

        </Toolbar>
      </AppBar>
      <div>
        {/* <MainSearch></MainSearch> */}
        <NewSearch/>
      </div>

    </Box>
  );
}

