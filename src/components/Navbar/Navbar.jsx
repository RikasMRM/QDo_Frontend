import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/logo/logo-l.png";
import useStyles from "./styles";

const Navbar = ({}) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <img src={logo} height="60px" className={classes.image} />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Navbar;
