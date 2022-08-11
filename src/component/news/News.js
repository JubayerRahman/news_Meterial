import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './noesStyle.css'

const News = (props) => {

    return (
        <div className='news'>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.news.urlToImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.news.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Share</Button>
        <Button size="small"><a className='newsLink' href={props.news.url} target='_blank'>Learn More</a></Button>
      </CardActions>
    </Card>
    </div>
    );
};

export default News;