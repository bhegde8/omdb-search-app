import React, { useState } from 'react';

import { Container, Typography, Grid, Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import styles from './SearchBox.module.css';

const RedTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#da0000',
      },
      '&:hover fieldset': {
        borderColor: '#da0000',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#da0000',
      },
    },
  },
})(TextField);

export default function SearchBox() {

  return (
    <React.Fragment>
      <div className={styles.containerParent}>
        <Container className={styles.container} maxWidth="md">

              <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                OMDb Search
              </Typography>

              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Search for a movie title using the box below. Results from the OMDb
                will be returned.
              </Typography>

              <Grid container spacing={2} justify="center">
                <Grid item>
                <RedTextField variant="outlined" size="small" />

                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
                    Search
                  </Button>
                </Grid>
              </Grid>
              
        </Container>
      </div>
    </React.Fragment>
  );
}
