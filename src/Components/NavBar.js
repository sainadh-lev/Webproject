import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import { Typography } from '@mui/material';

const pages = ["Home", "Members", "Resources", "Contact"];

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: { xs: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <img
            alt="LOGO"
            src="http://www.nitc.ac.in/electrical/nitceed/gceknewlogos.png"
            style={{ height: "40px" }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
              {page}
            </Button>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};
export default NavBar;
