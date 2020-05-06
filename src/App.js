/**
 * The root component of this web app.
 */

import React from 'react';

import styles from './App.css';

import SearchBox from './components/searchbox/SearchBox';
import ResultsGrid from './components/resultsgrid/ResultsGrid';

import { AppBar, CssBaseline, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


// Use the default dark theme provided by Material-UI with red
// as the primary color
const darkMode = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: red[800]
    }
  },
});

function App() {

  return (
    <div className={styles.App}>
      <ThemeProvider theme={darkMode}>
        
        <CssBaseline />

        <AppBar position="static">
          <Toolbar>
            <LocalMoviesIcon />

            <Typography variant="h5">
              OMDb Search
            </Typography>

          </Toolbar>
        </AppBar>

        <SearchBox />

        <ResultsGrid />

      </ThemeProvider>
      
    </div>
  );
}

export default App;
