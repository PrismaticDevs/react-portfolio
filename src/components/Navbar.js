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

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goFrontEnd = () => {
    window.location.href = "/front";
    handleClose();
  };
  const goBackEnd = () => {
    window.location.href = "/back";
    handleClose();
  };
  const goFull = () => {
    window.location.href = "/full";
    handleClose();
  };
  const goAbout = () => {
    window.location.href = "/about";
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
          <MenuItem onClick={() => goFrontEnd()}>Front End</MenuItem>
          <MenuItem onClick={() => goBackEnd()}>Back End</MenuItem>
          <MenuItem onClick={() => goFull()}>Full Stack</MenuItem>
          <MenuItem onClick={() => goAbout()}>About</MenuItem>
          <MenuItem onClick={() => goContact()}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
