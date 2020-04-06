import React from 'react';
import session from '../main/Session';
import { Redirect } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MUISelect from '@material-ui/core/Select';
import MUICheckbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import Box from '@material-ui/core/Box';

function controlDelete(url) {
	return (_) => {
		(session.delete(url)
			.then(() => session.setMessage('Successfully deleted'))
			.catch((e) => session.setError(e))
		)
	}
}

function controlPost(url, redirect) {
	return (e) => {
		(session.post(url, session.extract(e))
			.then((d) => redirect ? (session.message = 'Successfully saved' && redirect(d)) : session.setMessage('Successfully saved'))
			.catch((e) => session.setError(e))
		)
	}
}

function CheckRole({ role, children }) {
	return !session.login || session.login.role !== role ? <Redirect to="/login" /> : children;
}

const Input = ({ name, value, id, ...props }) => (
	<TextField
		name={name}
		id={id || name}
		variant="outlined"
		fullWidth
		defaultValue={value}
		margin='dense'
		{...props} />
)


const Select = ({ name, label, id, options, value, ...props }) => (
	<FormControl variant="outlined" margin='dense' fullWidth>
		<InputLabel id={name+'-label'}>{label}</InputLabel>
		<MUISelect
			name={name}
			id={id || name}
			labelId={name+'-label'}
			defaultValue={value}
			label={label}
			{...props}
		>
			{
				Object.entries(options).map(([k, v]) => <MenuItem key={k} value={k}>{v}</MenuItem>)
			}
		</MUISelect>
	</FormControl>
)

const Form = ({ action, redirect, onSubmit, children }) => {
	return (
		<Box width="100%" marginTop={1} clone>
			<form onSubmit={onSubmit || controlPost(action, redirect)}>
				{children}
			</form>
		</Box>)
}

const Submit = ({ label, color, variant, ...props }) => (
	<Button
		style={{
			marginTop: 8,
			marginBottom: 8,
			width: '100%',
		}}
		type="submit"
		variant={variant || "contained"}
		color={color || "primary"}
		disabled={session.fetching}
		{...props}
	>{session.fetching ? 'Sending...' : label || "Submit"}</Button>
)

const Checkbox = ({ name, id, checked, value, color, label, ...props }) => (
	<Box textAlign="left" marginY={1} width="100%" clone>
		<FormControlLabel
			control={<MUICheckbox
				name={name}
				id={id || name}
				defaultChecked={checked}
				value={value || "y"}
				color={color || "primary"}
				{...props}
			/>}
			label={label}
		/>
	</Box>
)

const BackButton = ({ label, color, variant, ...props }) => (
	<Button
		style={{
			marginTop: 8,
			marginBottom: 8,
			width: '100%',
		}}
		type="button"
		variant={variant || "contained"}
		color={color || "secondary"}
		disabled={session.fetching}
		onClick={() => session.history.goBack()}
		{...props}
	>{label || "Go Back"}</Button>
)


export {
	controlPost,
	controlDelete,
	CheckRole,
	Input,
	Select,
	Form,
	Submit,
	Checkbox,
	BackButton,
}