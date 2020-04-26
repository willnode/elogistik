import React from 'react';
import { SEO } from '../widget/page';
import { Link } from 'react-router-dom';
import { Context } from '../main/Contexts';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import CallIcon from '@material-ui/icons/Call';
import BusinessIcon from '@material-ui/icons/Business';
import Fab from '@material-ui/core/Fab';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { publicUrl } from 'main/Config';
import Slider from "react-slick";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



export default function Home() {
  return (<>
    <SEO
      title="Welcome to Best Logistic Surabaya!"
      description="Best Logistics Surabaya adalah perusahaan yang bergerak dibidang jasa pengiriman barang / cargo atau ekspedisi yang didukung oleh tenaga kerja / SDM yang profesional dan cakap serta memiliki armada yang sehat dengan perawatan rutin."
      image="/assets/gallery/1.jpg"
    />
    <div className="paper background center">

      <Typography variant="h3" gutterBottom>
        Welcome to Best Logistic Surabaya!
		  </Typography>
      <Typography variant="body1" gutterBottom>
        Best Logistics Surabaya adalah perusahaan yang bergerak dibidang jasa pengiriman barang / cargo atau ekspedisi yang didukung oleh tenaga kerja / SDM yang profesional dan cakap serta memiliki armada yang sehat dengan perawatan rutin.
		  </Typography>
    </div>
    <div className="paper background center">
      <Typography variant="h4">
        Cargo Pengiriman
      </Typography>
      <Grid className="cargo" container>
        <Grid component={Link} to="/layanan/darat/" item xs={4}>
          <LocalShippingIcon />
          <Typography variant="h4">
            Darat
				    </Typography>
        </Grid>
        <Grid component={Link} to="/layanan/laut/" item xs={4}>
          <DirectionsBoatIcon />
          <Typography variant="h4">
            Laut
          </Typography>
        </Grid>
        <Grid component={Link} to="/layanan/udara/" item xs={4}>
          <FlightTakeoffIcon />
          <Typography variant="h4">
            Udara
          </Typography>
        </Grid>
      </Grid>
      <p><Fab
        variant="extended"
        component={Link} to="/order/"
        color='primary'
      >
        <ShoppingCartIcon className="mr-2" /> Order Sekarang
			</Fab></p>
    </div>
    <div className="paper background center">
      <div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
        {
          [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14
          ].map((i) =>

            <img key={i} src={`${publicUrl}/assets/armada/${i + 1}.jpeg`} alt="" />

          )
        }
      </Slider></div>
      <Typography variant="h4">
        Driver kami mengedepankan keselamatan kerja dan mengikuti regulasi angkutan darat dan management resiko.
      </Typography>
      <p><Fab
        variant="extended"
        component={Link} to="/gallery/"
        color='primary'
      >
        <PhotoLibraryIcon className="mr-2" /> Gallery Collection
			</Fab></p>
    </div>
    <div className="paper background center">
      <img className="ceo" src="/assets/ceo.png" alt="" />
      <Typography variant="h4">
        "Kami Muda Pekerja Keras Bukan Pemalas"
      </Typography>
      <p><Fab
        variant="extended"
        component={Link} to="/company/"
        color='primary'
      >
        <BusinessIcon className="mr-2" /> Company Profile
			</Fab></p>
    </div>

    <div className="paper background center">
      <div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
        {
          [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23,
          ].map((i) =>

            <img key={i} src={`${publicUrl}/assets/kegiatan/${i + 1}.jpeg`} alt="" />

          )
        }
      </Slider></div>
      <Typography variant="h4">
        Team kami mengedepankan pelayanan yang profesional untuk kebutuhan bisnis anda yang tinggi.
      </Typography>
      <p><Fab
        variant="extended"
        onClick={() => Context.set('balloon', true)}
        color='primary'
      >
        <CallIcon className="mr-2" /> Hubungi Kami
			</Fab></p>
    </div>
  </>)
}