import { Pets } from "@mui/icons-material";
import { AppBar, Box, InputBase, styled, Toolbar, Typography } from "@mui/material";
import React from "react";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    display: "flex",
    alignItems: "center",
  }));

const Icons = styled(Box)(({ theme }) => ({
    display: "none", [theme.breakpoints.up("sm")]: { display: "flex" },
    gap: 5, alignItems: "center",
}));
  

const Navbar = () => {
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                MeowMeet
            </Typography>
            <Pets sx={{display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder="search..."></InputBase></Search>
            <Icons>Icons</Icons>
        </StyledToolbar>
    </AppBar>
    
  );
};
export default Navbar;