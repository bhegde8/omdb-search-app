import React, { useState } from 'react';

import Result from './Result';

import { Container, Grid } from '@material-ui/core';

import styles from './ResultsGrid.module.css';


const cards = [1, 2, 3, 4, 5, 6];

export default function ResultsGrid() {

  return (
    <React.Fragment>
      <Container className={styles.container}>

        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Result />
            </Grid>
          ))}
        </Grid>
            
      </Container>
    </React.Fragment>
  );
}
