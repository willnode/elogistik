import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { publicUrl } from '../main/Config';
import { Context } from '../main/Contexts';
import { Popper } from '@material-ui/core';


const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#111111',
    color: 'white',
    width: '100vw',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);


export default function Balloon() {
  const [open, setOpen] = Context.bind('balloon', useState(false));
  const anchorEl = React.useRef();
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
    <Popper disablePortal open={open}>
      <div className="cs-container">
        <Typography className="cs-title">
          Contact our Costumer Service
			  </Typography>
        <Grid container>
          {
            [
              ['Benny', '6281232221008', 'Heavy Cargo & Project', 'benny'],
              ['Hamz', '6281380046039', 'Retail Cargo Maluku & Papua', 'ilham'],
              ['Riza', '62895335572238', 'Retail Cargo Jawa & Kalimantan', 'riza'],
              ['Desy', '6281380046038', 'Retail Cargo NTB & NTT', 'dessy'],
              ['Widda', '6283831901981', 'Retail Cargo Bali & Sulawesi', 'widda'],
            ].map(([name, hp, title, img], i) =>
              <Grid key={hp} item xs={i < 2 ? 6 : 4}>
                <div className="cs-item">
                  <img className="cs-avatar" src={`/assets/CHAT/${img}.png`} alt={name} />
                  <div className="cs-name">{name}</div>
                  <Button component="a" className="title-name" key={name} target="_blank" rel="noopener noreferrer" href={`https://wa.me/${hp}?text=Halo+Best+Logistic,+Saya+Ingin+Menanyakan+Sesuatu,+Dapatkah+Anda+Membantu+Saya`} color="secondary" variant="contained">
                    {title}
                  </Button>
                </div>
              </Grid>
            )
          }
        </Grid>
      </div>
    </Popper>
  </div>
}