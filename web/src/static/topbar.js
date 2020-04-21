import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export function ButtonDropdown({ label, children }) {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	return <>
		<Button
			ref={anchorRef}
			aria-controls={open ? 'menu-list-grow' : undefined}
			aria-haspopup="true"
			onClick={handleToggle}
		>
			{label}
	 </Button>
		<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
			{({ TransitionProps, placement }) => (
				<Grow
					{...TransitionProps}
					style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
				>
					<Paper>
						<ClickAwayListener onClickAway={handleClose}>
							<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
								{children}
							</MenuList>
						</ClickAwayListener>
					</Paper>
				</Grow>
			)}
		</Popper>
	</>
}
export default function Topbar({ component }) {
	component = component || Link;
	return <>
		<Button component={component} to="/">Beranda</Button>
		<Button component={component} to="/order">Order</Button>
		<ButtonDropdown label="Layanan">
			<MenuItem component={component} to="/layanan/darat">Layanan Darat</MenuItem>
			<MenuItem component={component} to="/layanan/udara">Layanan Udara</MenuItem>
		</ButtonDropdown>
		<Button component={component} to="/company">Company</Button>
		<Button component={component} to="/galeri">Gallery</Button>
		<Button component={component} to="/about">About Us</Button>
	</>
}