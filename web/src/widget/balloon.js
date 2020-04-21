import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import SendIcon from '@material-ui/icons/Send';
import WAIcon from '@material-ui/icons/WhatsApp';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { publicUrl } from '../main/Config';
import { Context } from '../main/Contexts';


const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: '#111111',
		color: 'white',
		maxWidth: 1000,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid #dadde9',
	},
}))(Tooltip);


export default function Balloon() {
	const [open, setOpen] = Context.bind('balloon', useState(false));
	const ref = React.useRef();
	return <Box position="fixed" bottom={8} right={12}>
		<HtmlTooltip open={open} arrow interactive
			PopperProps={{
				disablePortal: true,
			}}
			title={<Box marginTop={2} textAlign="center">
				<Typography>
					Selamat Datang di Best Logistic. Ada yang perlu kami bantu?
				</Typography>
				<Hidden xsDown implementation="css">
					<img src={publicUrl+"/assets/Chat.png"} alt=""
						style={{objectFit: 'contain', margin: '1em 0'}} width="100%" height="250px"/>
				</Hidden>
				<Paper component="form" action="https://wa.me/6287825119580">
					<InputBase
						inputRef={ref}
						name="text"
						placeholder="Tanyakan ke kami"
						required
						autoComplete="none"
					/>
					<IconButton type="submit" aria-label="submit">
						<SendIcon />
					</IconButton>
				</Paper>
				<p>
					Anda bisa tanyakan lebih lanjut dengan menghubungi kami langsung
				</p>
				<ButtonGroup color="primary">
					<Button variant="text">
						<Box clone marginRight={1}><WAIcon /></Box>
					</Button>
					<Button component="a" target="_blank" rel="noopener noreferrer" href="https://wa.me/6287825119580">
						Hamz
					</Button>
					<Button component="a" target="_blank" rel="noopener noreferrer" href="https://wa.me/6282334573264">
						Desy
					</Button>
					<Button component="a" target="_blank" rel="noopener noreferrer" href="https://wa.me/6282244024042">
						Atha
					</Button>
				</ButtonGroup>
			</Box>}
		>
			<Fab
				variant="extended"
				onClick={() => setOpen(!open)}
				color='primary'
			>
				<Box clone marginRight={1}><CallIcon /></Box> Chat
			</Fab>
		</HtmlTooltip>

	</Box>
}