import React, { useEffect, useMemo, useState } from 'react';
import { Redirect } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MUISelect from '@material-ui/core/Select';
import MUICheckbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import {
	setMessage, setError, login, serverGet,
	serverDelete, serverPost, history, extractForm, popMessages
} from '../main/Helper';
import { Context } from '../main/Contexts';
import MaterialTable from 'material-table';
import { useRef } from 'react';
import { useHandleControlValidator } from './validators';
import { uploadsUrl } from '../main/Config';

function controlDelete(url, redirect) {
	popMessages();
	return (_) => {
		(serverDelete(url)
			.then(() => {
				if (redirect) redirect(url)
				window.setTimeout(() => setMessage('Berhasil dihapus'));
			})
			.catch((e) => setError(e))
		)
	}
}

function controlPost(url, redirect) {
	return (e) => {
		const form = extractForm(e);
		popMessages();
		(serverPost(url, form)
			.then((json) => {
				if (redirect) redirect(json, form)
				window.setTimeout(() => setMessage('Berhasil disimpan'));
			}).catch((e) => setError(e))
		)
	}
}


function CheckRole({ role, children }) {
	return !login() || login().role !== role ? <Redirect to="/login" /> : children;
}


const Input = ({ name, autoComplete, validator, ...props }) => {
	const ref = useRef();
	useHandleControlValidator(validator, ref);
	return <TextField
		name={name}
		inputRef={ref}
		fullWidth
		autoComplete={autoComplete || name}
		error={validator && !!validator[0]}
		helperText={validator && validator[0]}
		onChange={validator && (e => validator[3].current(e))}
		margin='normal'
		{...props} />
}

const Select = ({ name, label, options, validator, onChange, ...props }) => {
	const ref = useRef();
	useHandleControlValidator(validator, ref);
	return <FormControl margin='normal' fullWidth>
		<InputLabel
			error={validator && !!validator[0]}
			id={name + '-label'}
		>{label}</InputLabel>
		<MUISelect
			name={name}
			labelId={name + '-label'}
			label={label}
			onChange={validator ? (e => [validator[3].current(e), onChange && onChange(e)]) : onChange}
			{...props}
		>
			{
				Object.entries(options).map(([k, v]) => (
					<MenuItem key={k} value={k}>{v}</MenuItem>
				))
			}
		</MUISelect>
		<FormHelperText>{validator && validator[0]}</FormHelperText>
	</FormControl>
}

const Form = ({ action, redirect, onSubmit, children }) => {
	return (
		<Box width="100%" marginTop={1} clone>
			<form action={action} onSubmit={onSubmit || controlPost(action, redirect)}>
				{children}
			</form>
		</Box>)
}

const Submit = ({ label, color, variant, disabled, ...props }) => (
	<Button
		style={{
			marginTop: 8,
			marginBottom: 8,
			width: '100%',
		}}
		type="submit"
		variant={variant || "contained"}
		color={color || "primary"}
		disabled={Context.get('fetching') || disabled}
		{...props}
	>{Context.get('fetching') ? 'Sending...' : label || "Submit"}</Button>
)

const Checkbox = ({ name, value, color, label, ...props }) => (
	<Box textAlign="left" marginY={1} width="100%" clone>
		<FormControlLabel
			control={<MUICheckbox
				name={name}
				value={value || "y"}
				color={color || "primary"}
				{...props}
			/>}
			label={label}
		/>
	</Box>
)

const CommandButton = ({ name, value, label, color, variant, disabled }) => {
	const ref = useRef();
	return <Box margin={1}>
		<input name={name} ref={ref} type="checkbox" value={value || 'y'} hidden />
		<Button type="submit" color={color || 'default'}
			variant={variant || 'outlined'}
			onClick={() => ref.current.checked = true}
			disabled={Context.get('fetching') || disabled}
		>{label}</Button>
	</Box>
}

const FlexGroup = ({ label, children, ...props }) => {
	return <Box display="flex" {...props}>
		<Box flexGrow={1} className="MuiInputBase-root">{label}</Box>
		{children}
	</Box>
}

const File = ({ name, label, defaultValue, folder, readOnly, required, ...props }) => {
	const delRef = useRef();
	const [file, hasFile] = useState();
	return (
		<FlexGroup label={label}>
			<input name={name + "_delete"} ref={delRef} hidden />
			<ButtonGroup>
				{file && <Button type="button">1 File</Button>}
				{!readOnly && <Button key="upload" disabled={readOnly} type="button"
					variant={file ? 'contained' : 'outlined'} component="label">
					Upload
					<input
						name={name}	type="file"	hidden {...props}
						onChange={(e) => hasFile(e.target.files.length)}
						required={required && !defaultValue}
					/>
				</Button>}
				{defaultValue && <Button key="download" type="button"
					target="_blank" rel="noreferrer noopener" download
					href={`${uploadsUrl}/${folder || name}/${defaultValue}`}>
					View
									</Button>}
				{defaultValue && !readOnly && !required && <Button key="delete" type="submit"
					onClick={() => delRef.current.value = 'y'}
					disabled={Context.get('fetching')}
				>Delete</Button>}
			</ButtonGroup>
		</FlexGroup>
	)
}

const BackButton = ({ label, color, variant, ...props }) => (
	<Button
		style={{
			marginTop: 8,
			marginBottom: 8,
			width: '100%',
		}}
		type="button"
		variant={variant || "outlined"}
		color={color || "secondary"}
		disabled={Context.get('fetching')}
		onClick={() => history().goBack()}
		{...props}
	>{label || "Go Back"}</Button>
)

function RemoteTable({ src, itemKey, itemLabel, predefinedActions, title, actions, options, columns, data, ...props }) {
	let mounted = useRef(true);
	let tableRef = useRef();
	useEffect(() => (() => mounted.current = false), []);
	actions = useMemo(() => {
		return [...(actions || []), ...([
			{
				icon: 'add',
				tooltip: 'Add ' + itemLabel,
				isFreeAction: true,
				onClick: () => history().push(`/${src}/create`)
			}, {
				icon: 'input',
				tooltip: 'Open ' + itemLabel,
				onClick: (e, row) => history().push(`/${src}/detail/` + row[itemKey]),
			}, {
				icon: 'edit',
				tooltip: 'Edit ' + itemLabel,
				onClick: (e, row) => history().push(`/${src}/edit/` + row[itemKey]),
			}, {
				icon: 'delete',
				tooltip: 'Delete ' + itemLabel,
				onClick: (e, row) => (
					window.confirm(`Are you sure you want to delete this ${itemLabel}?`) &&
					controlDelete(`${src}/${row[itemKey]}`,
						(() => tableRef.current.onQueryChange()))()),
			}
		].filter(x => (predefinedActions || []).includes(x.icon)))];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []) // Always only updated once
	columns = useMemo(() => {
		if (typeof columns === 'object') {
			return Object.entries(columns).map((([field, column]) => {
				if (typeof column === 'string') {
					return { title: column, field };
				} else {
					return { ...column, field };
				}
			}));
		} else {
			return columns || [];
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // Always only updated once
	data = data || (query => new Promise((resolve, reject) => {
		let url = src + '?' + new URLSearchParams(query).toString();
		serverGet(url).then(r => mounted.current && resolve(r));
	})); // Already sync with our server
	options = options || {};
	options.actionsColumnIndex = -1;
	props = { ...props, actions, columns, options, data, title, tableRef }
	return <MaterialTable {...props} />
}


export {
	controlPost,
	controlDelete,
	CheckRole,
	CommandButton,
	FlexGroup,
	Input,
	Select,
	Form,
	File,
	Submit,
	Checkbox,
	BackButton,
	RemoteTable,
}