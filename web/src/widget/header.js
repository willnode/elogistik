import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles, login, doLogout } from '../main/Helper';
import { Link } from 'react-router-dom';
import { RoleTopbars } from '../main/App';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { publicUrl } from '../main/Config';
import { Context } from '../main/Contexts';

export default function Header() {
  const classes = useStyles();
  return (
    <Box style={{ background: 'black', position: "sticky", top: -120, zIndex: 1250 }}>
      <Box display="flex" height={120} paddingX={2} alignItems="center">
        <Hidden xsDown>
        <img style={{height: 90}} src={publicUrl + '/assets/logo best logistic.png'} alt="Logo" />
        </Hidden>
        <img style={{height: 60, margin: "auto"}} src={publicUrl + '/assets/header.png'} alt="Logo" />
      </Box>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <Hidden smUp implementation="css">
            <IconButton

              aria-label="open drawer"
              edge="start"
              onClick={() => Context.set('drawerOpen', true)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box flexGrow={1} />
          <Hidden xsDown implementation="css">
            <RoleTopbars />
          </Hidden>
          <Box flexGrow={1} />
          {
            login() ? <>
            <Button component={Link} to={"/"+login().role}>Panel</Button>
            <Button onClick={doLogout}>Keluar</Button>
            </> : <Button component={Link} to="/login">Masuk</Button>
          }
        </Toolbar>
      </AppBar>
    </Box >
  )
}