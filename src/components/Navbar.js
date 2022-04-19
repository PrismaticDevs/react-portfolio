import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const style = {
  appBar: {
    backgroundColor: "#131E5B",
    color: "white",
  },
  menu: {
    right: 0,
    position: "fixed",
  },
};

const isMobile = window.innerWidth < 900;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const goAbout = () => {
    window.location.href = "/";
    handleClose();
  };
  const goApps = () => {
    window.location.href = "/apps";
    handleClose();
  };
  const goResume = () => {
    window.location.href = "/resume";
    handleClose();
  };
  const goContact = () => {
    window.location.href = "/contact";
    handleClose();
  };
  return (
    <AppBar style={style.appBar}>
      <Toolbar>
        <Typography>
          <ImportantDevicesIcon sx={{ mr: 1 }} />
          Matthew Brignola
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={style.menu}
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => goAbout()}>About</MenuItem>
              <MenuItem onClick={() => goApps()}>Apps</MenuItem>
              <MenuItem onClick={() => goResume()}>Resume</MenuItem>
              <MenuItem onClick={() => goContact()}>Contact</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <MenuItem onClick={() => goAbout()}>About</MenuItem>
            <MenuItem onClick={() => goApps()}>Apps</MenuItem>
            <MenuItem onClick={() => goResume()}>Resume</MenuItem>
            <MenuItem onClick={() => goContact()}>Contact</MenuItem>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
