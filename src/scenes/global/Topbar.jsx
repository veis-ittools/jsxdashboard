import { Box, IconButton, useTheme } from "@mui/material";
import { useMsal } from "@azure/msal-react";


import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Typography from '@mui/material/Typography';


const Topbar = () => {

  const { instance } = useMsal();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button"  sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      <Stack direction="row" alignItems="center" gap={2}>
          <Avatar sx={{  bgcolor: 'secondary.main' }}>
              <ApartmentIcon />
          </Avatar> 
          <Typography component="h1" variant="h2"> 
              NAVIK 
          </Typography>  
      </Stack>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
          <Typography variant="h5">Color Mode</Typography>
        </IconButton>
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton  onClick={()=>{
            console.log('button clicked from top bar')

            instance.logoutRedirect({
              postLogoutRedirectUri: "/",
            });

          }}>
          <ExitToAppIcon />
          <Typography variant="h5">Sign Out</Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;