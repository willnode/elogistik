import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import { baseUrl } from './main/Config';
import App from './main/App';

function MainApp() {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
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
      }),
    [],
  );

  return (
      <ThemeProvider theme={theme}>
       <CssBaseline />
        <BrowserRouter forceRefresh={false} basename={baseUrl}>
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
