import React, { useState } from 'react';

import { Card, CardActions, CardActionArea, CardMedia, CardContent, Container, 
         Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const CardPosterMedia = withStyles({
  media: {
    height: '15em',
  },
})(CardMedia);

export default function Result() {

  return (
    <Card>
      <CardActionArea>
        <CardPosterMedia
          component="img"
          alt="Movie Poster"
          image="https://upload.wikimedia.org/wikipedia/commons/a/ae/Beyond_a_Reasonable_Doubt_movie_poster.jpg"
          title="Movie Poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Movie Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Year
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="small" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
