import React, { useRef, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import MUIContainer from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';
import { serverGet } from '../main/Helper';
import { useTheme } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { titlePostFix } from '../main/Config';

function SEO({ title, description, image, url }) {
	return <Helmet>
		{/* General tags */}
		{title ? <title>{title + ((titlePostFix && title && " | ") || '') + titlePostFix}</title> : null}
		{description ? <meta name="description" content={description} /> : null}
		{image ? <meta name="image" content={image} /> : null}
		{url ? <link rel="canonical" href={url} /> : null}	{/* OpenGraph tags */}
		{url ? <meta property="og:url" content={url} /> : null}
		{title ? <meta property="og:title" content={title} /> : null}
		{description ? <meta property="og:description" content={description} /> : null}
		{image ? <meta property="og:image" content={image} /> : null}	{/* Twitter Card tags */}
		{image ? <meta name="twitter:card" content="summary_large_image" /> : null}
		{title ? <meta name="twitter:title" content={title} /> : null}
		{description ? <meta name="twitter:description" content={description} /> : null}
		{image ? <meta name="twitter:image" content={image} /> : null}
		<meta name="theme-color" content={useTheme().palette.primary.main} />
	</Helmet>
}

const Container = ({ children, noStyle, maxWidth, center, ...props }) => {
	return noStyle ? children : (
		<MUIContainer maxWidth={maxWidth}>
			<Box p={3} my={5} clone  {...props}
				{...(center ? {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					textAlign: 'center'
				} : {})}>
				<Paper>{children}</Paper>
			</Box>
		</MUIContainer>
	)
}

const ErrorPrompt = () => (
	<>
		<Typography variant="h2" gutterBottom>Error :(</Typography>
		<Typography variant="body1">Sorry you might be offline. Check your connection.</Typography>
	</>
)

function Page({ src, dataCallback, noStyle, center, maxWidth, children, ...props }) {
	const [status, setStatus] = useState('loading');
	let mounted = useRef(true);
	useEffect(() => (() => mounted.current = false), []);
	useEffect(() => {
		if (src) {
			setStatus('loading');
			serverGet(src).then(data => {
				if (mounted) {
					dataCallback(data);
					setStatus('ok');
				}
			}).catch(e => {
				console.log(e);
				setStatus('error');
			});
		} else {
			setStatus('ok');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [src])
	return <Container noStyle={noStyle === undefined ? !!src : noStyle} {...{ maxWidth, center }} {...props}>
		{
			status === 'loading' ? <Skeleton animation="wave" variant="rect" width="100%" height={200} /> :
				(status === 'ok' ? <div>{children}</div> : <ErrorPrompt />)
		}
	</Container>
}

export default Page;

export { SEO };