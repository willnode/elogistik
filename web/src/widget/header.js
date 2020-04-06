import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../main/Helper';
import { Link } from 'react-router-dom';
import { RoleTopbars } from '../main/App';
import session from '../main/Session';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const HeadButton =  withStyles({
  text: {
    padding: 'inherit',
  },
})(Button);
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed"  className={classes.appBar}>
      <Toolbar variant="dense">
        <Hidden smUp implementation="css">
          <IconButton

            aria-label="open drawer"
            edge="start"
            onClick={session.toggleDrawerOpen}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Box flexGrow={1}/>
        <RoleTopbars>
          <HeadButton component={Link} to="/">Beranda</HeadButton>
          <HeadButton component={Link} to="/order">Order</HeadButton>
          <HeadButton component={Link} to="/layanan">Layanan</HeadButton>
          <HeadButton component={Link} to="/portofolio">Portofolio</HeadButton>
          <HeadButton component={Link} to="/about">About Us</HeadButton>
        </RoleTopbars>
        <Box flexGrow={1}/>
      </Toolbar>
    </AppBar>
  )
}