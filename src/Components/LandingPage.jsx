import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" >
        NAVIK.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LandingPage() {

  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal()
  const [authdone, setAuthdone] = useState(false)
  console.log('isAuthenticated===', isAuthenticated);

  const handleSubmit = () => {
        handleLogin('redirect')
    }

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            NAVIK SSO Sign in
          </Typography>
          <Box  noValidate sx={{ mt: 1 }}>

          {/* { isAuthenticated ? 
                // setAuthdone(!authdone)
                <Album></Album>
                // <Button
                // type="submit"
                // fullWidth
                // variant="contained"
                // sx={{ mt: 3, mb: 2 }}
                // >
                // Sign out
                // </Button>
                
                :
                
                <Button
                type="submit"
                fullWidth
                variant="contained"
                
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                >
                Sign In
                
                </Button>

                } */}


                
            <Button
                type="submit"
                fullWidth
                variant="contained"
                
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                >
                Sign In
            
            </Button>
                
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      {/* {buttonclick} */}
      {/* { authdone && <Album/>} */}
    </ThemeProvider>
    
  );
}
