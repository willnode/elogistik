import { SEO } from 'widget/page';
import React from 'react';
import Page from '../widget/page';
import { Input, Form, Submit } from '../widget/controls';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import Login from './login';
import { login, history } from 'main/Helper';

export default function Trucking() {
  const [rutes, setRutes] = React.useState(['']);
  const [ok, setOK] = React.useState(false);
  return <Page className="paper" maxWidth="md">
    <SEO
      title="Sewa Truk"
      description="Best Logistics Surabaya adalah perusahaan yang bergerak dibidang jasa pengiriman barang / cargo atau ekspedisi yang didukung oleh tenaga kerja / SDM yang profesional dan cakap serta memiliki armada yang sehat dengan perawatan rutin."
      image="/assets/beranda/36.jpeg"
    />
    <Form action="user/trucking" redirect={(json) => history().push('/user/trucking/detail/' + json.id)}>
      <h1>Sewa Truk</h1>
      <Input name="trucking_barang" label="Nama Barang (yang diangkut)" required />
      <Grid container style={{ marginTop: '1em' }}>
        <Grid item md={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Jenis Armada</FormLabel>
            <RadioGroup name="trucking_armada" required>
              <FormControlLabel value="Pick Up" control={<Radio />} label="Pick Up" />
              <FormControlLabel value="CDD" control={<Radio />} label="CDD" />
              <FormControlLabel value="Fuso" control={<Radio />} label="Fuso" />
              <FormControlLabel value="Wings Box" control={<Radio />} label="Wings Box" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl component="fieldset" style={{ width: '100%' }}>
            <FormLabel component="legend">Asal Barang (Mohon Diisi Alamat Lengkap)</FormLabel>
            <Input multiline name="trucking_start" />
            <FormLabel component="legend">Tujuan Barang (Mohon Diisi Alamat Lengkap)</FormLabel>
            {
              rutes.map((x, i) => <Input key={i} value={x} multiline required name="tujuan[]"
                onChange={(e) => [rutes[i] = e.target.value, setRutes([...rutes])]} />)
            }
            <Grid container>
              <Grid item md={6}>
                <Button disabled={!rutes[rutes.length - 1]} variant="contained" color="primary"
                  onClick={() => setRutes([...rutes, ''])}>Tambah</Button>
              </Grid>
              <Grid item md={6}>
                <Button disabled={rutes.length === 1 || !!rutes[rutes.length - 1]}
                  onClick={() => setRutes([...rutes.slice(0, rutes.length - 1)])}>Hapus</Button>
              </Grid>
            </Grid>
            <p><small>Tiap rute mohon isi alamat dengan lengkap</small></p>
          </FormControl>
        </Grid>
      </Grid>
      <Alert style={{ margin: '1rem 0' }} severity={login() ? "info" : "warning"}>{login() ? 'Data sewa anda akan dimasukkan ke akun anda' : 'Anda perlu masuk untuk melanjutkan'}</Alert>
      <Submit disabled={!ok || !login()} />
    </Form>
    {(!login() && <Login callback={() => setOK(true)} />)}

  </Page>;
}