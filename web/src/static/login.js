import React from 'react';
import Button from '@material-ui/core/Button';
import {InnerForm as ForgotPage } from './forgot';
import Typography from '@material-ui/core/Typography';
import {  history, extractForm, doLogin, setError, login, setMessage, getQueryParam } from '../main/Helper';
import Page, { SEO } from '../widget/page';
import { Input, Form, Submit, Checkbox, controlPost } from '../widget/controls';
import { useState } from 'react';
import {
  useValidator, required, minLength, validEmail, validTel,
  matchesField, checkAllValidators
} from '../widget/validators';


async function form_register(e, callback) {
  (
    controlPost('register', (e, data) => {
      (doLogin(
        data.get('email'),
        data.get('password'),
        data.get('rememberme'))
        .then(() => callback ? callback() : [setMessage('Berhasil terdaftar')])
        .catch(() => setError('Login salah')));
    })(e)
  )
}

function RegisterPage({ callback }) {
  const validators = {
    name: useValidator(required(), minLength(3)),
    email: useValidator(required(), validEmail()),
    tel: useValidator(required(), validTel()),
    password: useValidator(required(), minLength(8)),
    passconf: useValidator(matchesField('password')),
  }
  return (
    <Form onSubmit={(e) => form_register(e, callback)}>
      <Input validator={validators.name} name="name" label="Nama Lengkap" />
      <Input validator={validators.email} name="email" label="Email" type="email" />
      <Input validator={validators.tel} name="hp" label="Nomor HP (08xxx)" type="hp" />
      <Input validator={validators.password} name="password" label="Password" type="password" minLength={8} autoComplete="new-password" />
      <Input validator={validators.passconf} name="passconf" label="Ulangi Password" type="password" minLength={8} autoComplete="new-password" />
      <Checkbox name="rememberme" label="Ingat saya" />
      <Submit label="Daftar" disabled={!checkAllValidators(validators)} />
    </Form>)
}

async function form_login(e, callback) {
  const data = extractForm(e);
  (doLogin(
		data.get('username'),
		data.get('password'),
    data.get('rememberme'))
    .then(() => callback ? callback() : [setMessage('Selamat datang')])
    .catch(() => setError('Login salah')));
}

function LoginPage({ callback }) {
  return <Form onSubmit={(e) => form_login(e, callback)}>
    <Input name="username" required label="Email / No. HP" />
    <Input name="password" required label="Password" autoComplete="current-password" type="password" />
    <Checkbox name="rememberme" label="Ingat saya" />
    <Submit label="Sign In" />
  </Form>
}

export default function Login({ callback }) {
  const [state, setState] = useState(0);
  return (
    <Page maxWidth="sm" className="paper center">
      <Typography component="h1" variant="h5">
        {["Masuk", "Daftar", "Pulihkan Akun"][state]}
      </Typography>

      {state === 0 && <LoginPage callback={callback} /> }
      {state === 1 && <RegisterPage callback={callback} /> }
      {state === 2 && <ForgotPage callback={callback} /> }
      {state !== 0 && <Button onClick={() => setState(0)}>Sudah punya akun?</Button>}
      {state !== 1 && <Button onClick={() => setState(1)}>Belum punya akun?</Button>}
      {state !== 2 && <Button onClick={() => setState(2)}>Lupa password?</Button>}
    </Page>
  );
}

export function LoginWithSEO () {
  return <>
  <SEO title="Masuk" description="Masuk ke Member Area"/>
  <Login />
  </>
}