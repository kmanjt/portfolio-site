import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Logo from "../assets/me.jpg";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#38639F' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={Logo}
        />
          </IconButton>
          <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kevin James Tomescu -- Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
