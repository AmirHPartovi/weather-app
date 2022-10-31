import React from 'react'
import Grid from '@mui/material/Grid'
import WeatherCard from '../../Components/WeatherCard/WeatherCard'
import { useState,useEffect} from 'react'
import {handleGetOneDayWeather} from '../../Api/Api'
import IranCities from '../../Data/IranCities.json'

type Props = {
  
}

const Home = (props: Props) => {
  
const iran = IranCities.map(c => c.slug)

 
  const [city, setCity] = useState('tehran');
  const [cityWeather, setCityWeather] = useState({})
  

  const handleGetData = async () => {
      const data = await  handleGetOneDayWeather(city)
      setCityWeather(data)
  }
console.log(cityWeather)
  useEffect(() => {
      handleGetData()
  }, [city])

  return (
    <Grid container justifyContent={'center'} alignItems={'flex-start'} spacing={2}>
      
      <WeatherCard cityWeather={cityWeather} city={city}/>
      
    </Grid>
  )
}

export default Home