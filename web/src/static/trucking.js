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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { publicUrl } from 'main/Config';

function TruckDetail({ truck }) {
  switch (truck) {
    case "Pick Up":
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan="5">Pick Up Bak</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ukuran Karoseri</TableCell>
              <TableCell>Berat</TableCell>
              <TableCell>Ukuran Mobil</TableCell>
              <TableCell>Mesin</TableCell>
              <TableCell>Roda dan Ban</TableCell>
            </TableRow>          </TableHead>
          <TableBody>

            <TableRow>
              <TableCell>Panjang : 242 cm</TableCell>
              <TableCell>Berat Kosong : 800 Kg</TableCell>
              <TableCell>Panjang : 372 cm</TableCell>
              <TableCell>Model : G15A</TableCell>
              <TableCell>Ukuran Ban: 165R 13C 94/92R 8PR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lebar : 144 cm</TableCell>
              <TableCell>Berat Maksimal : 2 Ton</TableCell>
              <TableCell>Lebar : 183 cm</TableCell>
              <TableCell>Kapasitas Silinder : 1493 cc</TableCell>
              <TableCell>Ukuran Roda: -</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tinggi : 30 cm</TableCell>
              <TableCell></TableCell>
              <TableCell>Tinggi : 182 cm</TableCell>
              <TableCell>Kecepatan Maksimum (Km/Jam) : -</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dimensi : 6 CBM</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Tenaga Maksimum (PS/rpm) : 78,8/5500</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody></Table>
      );
    case "CDD":
      return (<Table>

        <TableHead>
          <TableRow>
            <TableCell colSpan="5">Colt Diesel Double (CDD) Bak</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ukuran Karoseri</TableCell>
            <TableCell>Berat</TableCell>
            <TableCell>Ukuran Mobil</TableCell>
            <TableCell>Mesin</TableCell>
            <TableCell>Roda dan Ban</TableCell>
          </TableRow>       </TableHead>
        <TableBody>

          <TableRow>
            <TableCell>Panjang : 560 cm</TableCell>
            <TableCell>Berat Kosong : 2,3 Ton</TableCell>
            <TableCell>Panjang : 670 cm</TableCell>
            <TableCell>Model : 4D34-2AT7</TableCell>
            <TableCell>Ukuran Ban: -</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lebar : 200 cm</TableCell>
            <TableCell>Berat Maksimal : 7,5 Ton</TableCell>
            <TableCell>Lebar : 200 cm</TableCell>
            <TableCell>Kapasitas Silinder : 3.908 CC</TableCell>
            <TableCell>Ukuran Roda: 7.50-16-14PR</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tinggi : 220 cm</TableCell>
            <TableCell></TableCell>
            <TableCell>Tinggi : 220 cm</TableCell>
            <TableCell>Kecepatan Maksimum (Km/Jam) : 112</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dimensi : 26 CBM</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Tenaga Maksimum (PS/rpm) : 136/2.900</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody></Table>
      );
    case "Fuso":
      return (<Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan="5">Fuso Bak</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ukuran Karoseri</TableCell>
            <TableCell>Berat</TableCell>
            <TableCell>Ukuran Mobil</TableCell>
            <TableCell>Mesin</TableCell>
            <TableCell>Roda dan Ban</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Panjang : 630 cm</TableCell>
            <TableCell>Berat Kosong : 7,2 Ton</TableCell>
            <TableCell>Panjang : 1190 cm</TableCell>
            <TableCell>Model : 6S20</TableCell>
            <TableCell>Ukuran Ban: -</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lebar : 220 cm</TableCell>
            <TableCell>Berat Maksimal : 15 Ton</TableCell>
            <TableCell>Lebar : 250 cm</TableCell>
            <TableCell>Kapasitas Silinder : -</TableCell>
            <TableCell>Ukuran Roda: -</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tinggi : 230 cm</TableCell>
            <TableCell></TableCell>
            <TableCell>Tinggi : 290 cm</TableCell>
            <TableCell>Kecepatan Maksimum (Km/Jam) : 90</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dimensi : 30 CBM</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Tenaga Maksimum (PS/rpm) : 230/2.200</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody></Table>);
    case "Wings Box":
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan="5">Wings Box</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ukuran Karoseri</TableCell>
              <TableCell>Berat</TableCell>
              <TableCell>Ukuran Mobil</TableCell>
              <TableCell>Mesin</TableCell>
              <TableCell>Roda dan Ban</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Panjang : 940 cm</TableCell>
              <TableCell>Berat Kosong : 7,2 Ton</TableCell>
              <TableCell>Panjang : 1190 cm</TableCell>
              <TableCell>Model : 6S20</TableCell>
              <TableCell>Ukuran Ban: -</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lebar : 240 cm</TableCell>
              <TableCell>Berat Maksimal : 25 Ton</TableCell>
              <TableCell>Lebar : 250 cm</TableCell>
              <TableCell>Kapasitas Silinder : -</TableCell>
              <TableCell>Ukuran Roda: -</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tinggi : 290 cm</TableCell>
              <TableCell></TableCell>
              <TableCell>Tinggi : 290 cm</TableCell>
              <TableCell>Kecepatan Maksimum (Km/Jam) : 90</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dimensi : 65 CBM</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Tenaga Maksimum (PS/rpm) : 230/2.200</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    default:
      return "";
  }
}
export default function Trucking() {
  const [rutes, setRutes] = React.useState(['']);
  const [truck, setTruck] = React.useState('');
  const [ok, setOK] = React.useState(!!login());
  return <Page className="paper" maxWidth="lg">
    <SEO
      title="Sewa Truk"
      description="Best Logistics Surabaya adalah perusahaan yang bergerak dibidang jasa pengiriman barang / cargo atau ekspedisi yang didukung oleh tenaga kerja / SDM yang profesional dan cakap serta memiliki armada yang sehat dengan perawatan rutin."
      image="/assets/beranda/36.jpeg"
    />
    <Form action="user/trucking" redirect={(json) => history().push('/user/trucking/detail/' + json.id)}>
      <h1>Sewa Truk</h1>
      <Input name="trucking_barang" label="Nama Barang (yang diangkut)" required />
      <Grid container style={{ marginTop: '1em' }}>
        <Grid item sm={6} md={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Jenis Armada</FormLabel>
            <RadioGroup value={truck} onChange={(e) => setTruck(e.target.value)} name="trucking_armada" required>
              <FormControlLabel value="Pick Up" control={<Radio />} label="Pick Up" />
              <FormControlLabel value="CDD" control={<Radio />} label="CDD" />
              <FormControlLabel value="Fuso" control={<Radio />} label="Fuso" />
              <FormControlLabel value="Wings Box" control={<Radio />} label="Wings Box" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sm={6} md={3}>
          {truck && <img className="trucks-thumb" alt="" src={`${publicUrl}/assets/trucks/${truck}.png`}/>}
        </Grid>
        <Grid item sm={12} md={6}>
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
        <Grid item sm={12} md={12}>
          <TableContainer>
            <TruckDetail truck={truck} />
          </TableContainer>
        </Grid>
      </Grid>
      <Alert style={{ margin: '1rem 0' }} severity={login() ? "info" : "warning"}>{login() ? 'Data sewa anda akan dimasukkan ke akun anda' : 'Anda perlu masuk untuk melanjutkan'}</Alert>
      <Submit disabled={!ok || !login()} />
    </Form>
    {(!login() && <Login callback={() => setOK(true)} />)}

  </Page>;
}