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
	return <Box zIndex="3000" position="fixed" bottom={8} right={12}>
		<HtmlTooltip open={open} arrow interactive
			PopperProps={{
				disablePortal: true,
			}}
			title={<Box marginTop={2} textAlign="center">
				<Typography>
					Contact our Costumer Service
				</Typography>
				<img src={publicUrl + "/assets/Chat.png"} alt=""
					style={{ objectFit: 'contain', margin: '1em 0' }} width="100%" height="250px" />
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
				<ButtonGroup color="secondary">
					<Button variant="text">
						<Box clone marginRight={1}><WAIcon /></Box>
					</Button>
					{
						Object.entries({
							Hamz: '6287825119580',
							Desy: '6282334573264',
							Atha: '6282244024042',
						}).map(([name, hp]) =>
							<Button component="a" key={name} target="_blank" rel="noopener noreferrer"
								href={`https://wa.me/${hp}?text=Halo+Best+Logistic,+Saya+Ingin+Menanyakan+Sesuatu,+Dapatkah+Anda+Membantu+Saya`}>
								{name}
							</Button>
						)
					}
				</ButtonGroup>
			</Box>}
		>
			<Fab
				variant="extended"
				onClick={() => setOpen(!open)}
				color='secondary'
			>
				<Box clone marginRight={1}><CallIcon /></Box> Chat
			</Fab>
		</HtmlTooltip>

	</Box>
}