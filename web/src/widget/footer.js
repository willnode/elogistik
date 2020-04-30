import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Page from './page';
import { DrawerListItem } from './drawer';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import BusinessIcon from '@material-ui/icons/Business';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
	return (<div className="footer">
		<Grid container>
			<Grid item xs={12} sm={6}>
				<Page className="paper">
					<h3>Navigasi</h3>
					<List>
						<DrawerListItem to="/" icon={HomeIcon} label="Beranda" />
						<DrawerListItem to="/order/" icon={ShoppingCartIcon} label="Order Barang" />
						<DrawerListItem to="/trucking/" icon={LocalShippingOutlinedIcon} label="Sewa Truk" />
						<DrawerListItem to="/layanan/darat/" icon={LocalShippingIcon} label="Layanan Darat" />
						<DrawerListItem to="/layanan/laut/" icon={DirectionsBoatIcon} label="Layanan Laut" />
						<DrawerListItem to="/layanan/udara/" icon={FlightTakeoffIcon} label="Layanan Udara" />
						<DrawerListItem to="/company/" icon={BusinessIcon} label="Company" />
						<DrawerListItem to="/galeri/" icon={PhotoLibraryIcon} label="Gallery" />
						<DrawerListItem to="/about/" icon={InfoIcon} label="About Us" />
						<DrawerListItem to="/login/" icon={PeopleIcon} label="Member Area" />
					</List>
				</Page>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Page className="paper center">
					<h3>Follow Us</h3>
					<List>
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
					{<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.442620715147!2d112.7321577531674!3d-7.346538647374439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e5c8a23f4e13%3A0x7f32129b25bad9b2!2sBEST%20LOGISTIC%20SURABAYA!5e0!3m2!1sid!2sid!4v1586505310484!5m2!1sid!2sid"
						title="Maps" width="100%" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen tabIndex="0"></iframe>}
				</Page>
			</Grid>
		</Grid>
		<Typography variant="body2" component="div" color="textSecondary" align="center">
			<h3>Best Logistic Surabaya</h3>
			<p>Ruko Korem Bhaskarajaya 084 Jl. Wisata Menanggal No.57 Dukuh Menanggal Surabaya</p>
		</Typography>
	</div>)
}