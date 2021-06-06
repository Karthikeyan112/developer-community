import React from 'react';
import { 
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  IconButton,
  makeStyles,
  Typography,
  CardMedia,
  CardHeader,
} from '@material-ui/core';
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import tableImg from '../../assets/table.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 500
  }
})

const TimeLineCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="user"  />
          }
          title='User Name'
          subheader='September 14, 2016'
        />
        <CardContent>
          <Typography variant='body2' component='p' color='colorSecondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardMedia
        component='img'
        alt='title of the image'
        height='240'
        image={tableImg}
        title='Image Title'
      />
      <CardActions>
        <IconButton aria-label="share" color='primary'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" color='primary'>
          <ShareIcon />
        </IconButton>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default TimeLineCard;
