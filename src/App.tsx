import * as React from 'react';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import '@fontsource/roboto/300.css';
import { Typography } from '@mui/material';


export default function App() {

  return(
    <div>
      <Button startIcon={<SettingsIcon/>} variant="contained" color='secondary' size='large'>Hello world</Button>
      <Typography variant='h1' component="p">h1.heading</Typography>
      <Button variant='contained' sx={
        {
          color: 'gray',
          backgroundColor: 'blue',
          margin: '10px'
        }
      }>red button</Button>
    </div>
  ) 
}
