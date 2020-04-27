import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Context } from 'main/Contexts';
import { Link } from 'react-router-dom';


const DrawerListItem = ({ to, icon, label }) => (
  <ListItem component={Link} onClick={() => Context.set('drawerOpen', false)} button to={to}>
    <ListItemIcon>{React.createElement(icon)}</ListItemIcon>
    <ListItemText primary={label} />
  </ListItem>
)

function DrawerComponent({ children }) {
  let [drawerOpen, setDrawerOpen] = Context.bind('drawerOpen', useState(false));
  // useEffect(() => (() => Context.unbind('drawerOpen')), [])
  let classes = { paper: 'drawer-paper' }
  return (
    <nav>
      <Drawer
        variant="temporary"
        classes={classes}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <div className='drawer-container'>
          {children}
        </div>
      </Drawer>
    </nav>
  )
}

export {
  DrawerComponent, DrawerListItem
}
