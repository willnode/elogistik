import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import CallIcon from '@material-ui/icons/Call';
import Collapse from '@material-ui/core/Collapse';
import { Context } from '../main/Contexts';
import { Popper } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default function Balloon() {
  const [open, setOpen] = Context.bind('balloon', useState(false));
  const ref = React.useRef();
  return <div className="cs-float">
    <Fab
      variant="extended"
      onClick={() => setOpen(!open)}
      color='secondary'
      buttonRef={ref}
    >
      <CallIcon /> Chat
		</Fab>
    <Popper disablePortal open={open} transition>
      {({ TransitionProps }) => (
        <Collapse {...TransitionProps} timeout={350}>
          <div className="cs-container">
            <Typography className="cs-title mx-2">
              Hot Line Service
			      </Typography>
            <List>
              {
                [
                  ['BENNY', 'CEO', '6281232221008', 'Heavy Cargo & Project', 'benny'],
                  ['HAMZ', 'Marketing', '6287825119580', 'Specialist Trucking in Land, Air Freight & Container', 'ilham'],
                  ['DESSY', 'CSR', '6282334573264', 'Retail Cargo Bali, NTB & NTT', 'dessy'],
                  ['RIZA', 'CSO', '62895335572238', 'Retail Cargo Jawa, Kalimantan & Sulawesi', 'riza'],
                  ['WIDDA', 'Marketing', '6283831901981', 'Specialist Sea Freight & Air Freight', 'widda'],
                ].map(([name, job, hp, title, img], i) =>
                  <ListItem key={hp} className="cs-item" component="a" button
                    target="_blank" rel="noopener noreferrer"
                    href={`https://wa.me/${hp}?text=Halo+Best+Logistic,+Saya+Ingin+Menanyakan+Sesuatu,+Dapatkah+Anda+Membantu+Saya`}
                  >
                    <ListItemIcon>
                      <img className="cs-avatar" src={`/assets/CHAT/${img}.png`} alt={name} />
                    </ListItemIcon>
                    <ListItemText>
                      <div className="cs-job">{job}</div>
                      <div className="cs-name">{name}</div>
                      <div className="cs-title">{title}</div>
                    </ListItemText>
                  </ListItem>
                )
              }
            </List>
          </div>
        </Collapse>

      )}
    </Popper>
  </div>
}