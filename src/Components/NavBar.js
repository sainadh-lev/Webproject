import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const pages = ["home", "members", "resources", "contacts"];

const NavBar = () => {
    const navigate = useNavigate();
    function handleClick(page) {
        var url = (page==='home'?'/':'/'+page);
        navigate(url);
    }
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
            <Button key={page} sx={{ my: 2, color: "white", display: "block" }} value={page} onClick={ (e) => handleClick(e.target.value) }>
              {page}
            </Button>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};
export default NavBar;
