import { ChildFriendlySharp, Group, Home, MarkUnreadChatAltTwoTone, ModeNight, Pages } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";

import React from 'react';

interface SidebarProps {
  setMode: (mode: "light" | "dark") => void;
  mode: "light" | "dark";
}

const Sidebar: React.FC<SidebarProps> = ({ setMode, mode }) => {
  return (
    <Box flex ={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position={"fixed"}>
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
              <Switch onClick={() => setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>           
          </ListItem>
      </List>
      </Box>


  
    </Box>
  );
};
export default Sidebar;