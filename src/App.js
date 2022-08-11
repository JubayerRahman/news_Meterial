import React, { useEffect, useState } from 'react'
import './App.css';
import { Button, Grid } from '@mui/material'
import { Container } from '@mui/system';
import News from './component/news/News';

function App() {
  const [news, setNews] = useState([]);
    useEffect(()=>{
        const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=74e16732e2b5474ba422c0cb04be4856';
        fetch(url)
        .then(res => res.json())
        .then(data => setNews(data.articles))
    },[])
  return (
    <div>
      <Container>
      <div className='App'>
      <Button variant="contained"><a className='buttonLink' href='https://jubayerrahman.github.io/JubayerCompletePortfolio/' target='_blank'>Jubayer Rahman</a></Button>
      </div>
      <h1>News of Today:{news.length}</h1>
      
      <Grid  container>
      {
        news.map(news=><News className='news' news={news}></News>)
      }
      </Grid>
      {/* <News></News> */}
      </Container>
      
    </div>
  );
}

export default App;
