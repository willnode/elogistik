import { hydrate, render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import { publicUrl } from './main/Config';
import App from './main/App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

function GenerateTheme() {
  return createMuiTheme({
    overrides: {
      MuiFormControl: {
        marginNormal: {
          marginTop: 0,
          marginBottom: 8,
        }
      }
    },
    palette: {
      background: {
        default: '#050505',
        paper: 'rgba(16, 16, 16, 0.9)',
      },
      primary: {
        light: '#ff833a',
        main: '#e65100',
        dark: '#ac1900',
        contrastText: '#fff',
      },
      secondary: {
        light: '#3aff83',
        main: '#00e651',
        dark: '#00ac19',
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

let root = document.getElementById('root');
(root.hasChildNodes() ? hydrate : render)(<MainApp />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
