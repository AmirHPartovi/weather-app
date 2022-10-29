import React from 'react'
import Grid from '@mui/material/Grid'
import WeatherCard from '../../Components/WeatherCard/WeatherCard'

type Props = {}

const Home = (props: Props) => {
  return (
    <Grid container justifyContent={'center'} alignItems={'flex-start'} spacing={2}>
      
      <WeatherCard/>
      
    </Grid>
  )
}

export default Home