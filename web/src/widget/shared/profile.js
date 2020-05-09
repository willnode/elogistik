import React, { useState, useMemo } from 'react';
import Page from '../page';
import { Form, Input, Submit, File } from '../controls';
import Typography from '@material-ui/core/Typography';
import { Context } from '../../main/Contexts';
import { doLogin, login, setMessage } from '../../main/Helper';
import { appKey } from '../../main/Config';
import {
  useValidator, required, minLength, validEmail,
  matchesValue, matchesField, requireField,
  checkAllValidators, matchesRegex, validTel
} from '../validators';
import Box from '@material-ui/core/Box';

function submit(_, data) {
  doLogin(
    (data.get('email') || login().email),
    (data.get('password') || (atob(Context.get('auth').substr(6)).split(':', 2)[1])),
    Boolean(localStorage.getItem(appKey + 'appauth'))).then(() => setMessage('Successfully Saved'));
}

export default function () {
  const [data, setData] = useState(null);
  const role = login().role;
  const curPassword = useMemo(() => (atob(Context.get('auth').substr(6)).split(':', 2)[1]), []);
  const form = data && data.data;
  const validators = {
    name: useValidator(required(), minLength(3), matchesRegex(/^[\w -'"]+$/)),
    hp: useValidator(required(), validTel()),
    email: useValidator(required(), validEmail()),
    oldpass: useValidator(matchesValue(curPassword)),
    password: useValidator(requireField('oldpass'), minLength(8)),
    passconf: useValidator(matchesField('password')),
  }
  return (
    <Page className="paper" maxWidth="sm" src={`${role}/profile`} dataCallback={setData} >
      <Typography variant="h4">Edit Profile</Typography>
      {
        data ? (
          <Form action={`${role}/profile`} redirect={submit}>
            <Input validator={validators.name} name="name" label="Nama" defaultValue={form.name} required />
            <Input validator={validators.email} name="email" label="Email" defaultValue={form.email} required type="email" />
            <Input validator={validators.hp} name="hp" label="No. HP" defaultValue={form.hp} required />
            <File folder="avatar" name="avatar" label="Avatar" defaultValue={form.avatar} accept="image/*"/>
            <Box marginTop={5}>Jika anda membutuhkan password baru, masukkan data berikut:</Box>
            <Input validator={validators.oldpass} name="oldpass" label="Current Password" type="password" autoComplete="current-password" />
            <Input validator={validators.password} name="password" label="New Password" type="password" autoComplete="new-password" />
            <Input validator={validators.passconf} name="passconf" label="Re-enter New Password" type="password" autoComplete="new-password" />
            <Submit disabled={!checkAllValidators(validators)} />
          </Form>
        ) : null
      }
    </Page>)
}