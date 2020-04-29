import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Alert from '@material-ui/lab/Alert';
import { Context } from 'main/Contexts';
import { Switch, Route } from 'react-router-dom';
import Balloon from './balloon';
import Slider from "react-slick";
import { publicUrl } from 'main/Config';
import { login } from 'main/Helper';

function Notification() {
  Context.bind('message', useState(null));
  Context.bind('error', useState(null));
  return <>
    {(x => x ? <Alert severity="success" color="info">{x}</Alert> : null)(Context.get('message'))}
    {(x => x ? <Alert severity="error">{x}</Alert> : null)(Context.get('error'))}
  </>
}

const Gallery = React.memo(function () {
  return <><div className="gallery-slider header">
    <Slider infinite autoplay arrows={false} pauseOnHover={false}>
      {
        [
          37, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36
        ].map((x) =>
          <img src={`${publicUrl}/assets/beranda/${x}.jpeg`} alt="" key={x} />
        )
      }
    </Slider>
  </div>
    <div className="marquee">
      <p><span className="title">Best Logistic Surabaya</span> -
      Best Team Best Partner Best Logistic
      <span className="separator" />Selamat Datang di Best Logistic Surabaya,
      kami adalah perusahaan yang bergerak dibidang
       jasa pengiriman barang / cargo / ekspedisi.
      </p></div>
  </>
})

export function RouteByRole({ roles, component }) {
  return <Switch>{roles.map(x => <Route key={x.role} path={'/' + x.role} component={x[component]} />)}</Switch>
}

export default function Layout({ roles }) {
  return (
    <div className="layout-root">
      <Header children={<RouteByRole component="top" roles={roles} />} />
      {(!login() || login().role !== 'admin') && <Gallery />}
      <div className="layout-side">
        <RouteByRole component="left" roles={roles} />
        <main className="layout-content" id="main">
          <Notification />
          <RouteByRole component="main" roles={roles} />
        </main>
        <RouteByRole component="right" roles={roles} />
      </div>
      <Balloon />
      <Footer children={<RouteByRole component="bottom" roles={roles} />} />
    </div>
  )
}


