import React from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import BusinessIcon from '@material-ui/icons/Business';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InfoIcon from '@material-ui/icons/Info';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { DrawerComponent, DrawerListItem } from 'widget/drawer';
import PeopleIcon from '@material-ui/icons/People';
import Home from './home';
import Login from './login';
import Forgot from './forgot';
import Offline from './offline';
import Page404 from './404';
import { login, getQueryParam } from 'main/Helper';
import Order from './order';
import Layanan from './layanan';
import Galeri from './galeri';
import About from './about';
import Company from './company';

function RedirectIfLoggedInOrShow({ component }) {
  return login() ? <Redirect to={getQueryParam('redirect') || '/' + login().role + '/'} /> : React.createElement(component);
}

function Main() {
  return <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/offline" component={Offline} />
    <Route exact path="/login">
      <RedirectIfLoggedInOrShow component={Login} />
    </Route>
    <Route exact path="/forgot">
      <RedirectIfLoggedInOrShow component={Forgot} />
    </Route>
    <Route path="/layanan" component={Layanan} />
    <Route exact path="/order" component={Order} />
    <Route exact path="/galeri" component={Galeri} />
    <Route exact path="/about" component={About} />
    <Route exact path="/company" component={Company} />
    <Route component={Page404} />
  </Switch>
}
function LeftBar() {
  return (
    <DrawerComponent>
      <List>
        <DrawerListItem to="/" icon={HomeIcon} label="Beranda" />
        <DrawerListItem to="/order/" icon={ShoppingCartIcon} label="Order" />
        <DrawerListItem to="/layanan/darat/" icon={LocalShippingIcon} label="Layanan Darat" />
        <DrawerListItem to="/layanan/laut/" icon={DirectionsBoatIcon} label="Layanan Laut" />
        <DrawerListItem to="/layanan/udara/" icon={FlightTakeoffIcon} label="Layanan Udara" />
        <DrawerListItem to="/company/" icon={BusinessIcon} label="Company" />
        <DrawerListItem to="/galeri/" icon={PhotoLibraryIcon} label="Gallery" />
        <DrawerListItem to="/about/" icon={InfoIcon} label="About Us" />
        <DrawerListItem to="/login/" icon={PeopleIcon} label="Member Area" />
      </List>
      <List>
        <ListItem>
          <ListItemText primary="Follow Us" />
        </ListItem>
        <ListItem>
          <Grid container>
            <Grid item sm={4}>
              <IconButton href="https://facebook.com/JawaBaliLombok/"
                target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ color: '#1877F2' }} />
              </IconButton>
            </Grid>
            <Grid item sm={4}>
              <IconButton href="https://instagram.com/bestlogisticsurabaya"
                target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ color: '#E4405F' }} />
              </IconButton>
            </Grid>
            <Grid item sm={4}>
              <IconButton href="https://youtube.com/channel/UCMAcL8DHkBbTQq9aBAcZYvA"
                target="_blank" rel="noopener noreferrer">
                <YouTubeIcon style={{ color: '#FF0000' }} />
              </IconButton>
            </Grid>
          </Grid>
        </ListItem>
      </List>

    </DrawerComponent>
  )
}

function TopBar() {
  return <>
  <Hidden xsDown implementation="css">
    <Button component={Link} to="/login/" color="inherit">Masuk</Button>
    </Hidden>
  </>
}

export default {
  role: '',
  main: Main,
  top: TopBar,
  left: LeftBar,
}
