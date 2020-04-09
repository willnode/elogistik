import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import { publicUrl } from './main/Config';
import App from './main/App';

function GenerateTheme() {
  return createMuiTheme({
    palette: {
      background: {
        default: '#111111',
        paper: '#212121',
      },
      primary: {
        light: '#ff833a',
        main: '#e65100',
        dark: '#ac1900',
        contrastText: '#fff',
      },
      secondary: {
        light: '#484848',
        main: '#212121',
        dark: '#000000',
        contrastText: '#fff',
      },
      type: 'dark',
    },
  })
}

function MainApp() {
  const generated = React.useMemo(() => GenerateTheme(), []);

  return (
    <ThemeProvider theme={generated}>
      <CssBaseline />
      <BrowserRouter forceRefresh={false} basename={publicUrl}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.render(<MainApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
