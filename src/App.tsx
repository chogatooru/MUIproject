import * as React from 'react';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import '@fontsource/roboto/300.css';
import { Box, Container, Stack, Typography } from '@mui/material';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';


export default function App() {

  return(
    <>
     <Navbar/>
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>

    </Box>
    </>
  ) 
}
