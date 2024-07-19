import { ChildFriendlySharp, Group, Home, MarkUnreadChatAltTwoTone, ModeNight, Pages } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box flex ={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <List>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon >
                 <Home/>
              </ListItemIcon> 
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <MarkUnreadChatAltTwoTone/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ChildFriendlySharp/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>           
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch />
            </ListItemButton>           
          </ListItem>
      </List>

  
    </Box>
  );
};
export default Sidebar;