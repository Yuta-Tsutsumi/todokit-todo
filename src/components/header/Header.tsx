import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.root}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
