import React from 'react'
import Grid from '@mui/material/Grid'
import WeatherCard from '../../Components/WeatherCard/WeatherCard'
import { useState,useEffect} from 'react'
import {handleGetOneDayWeather} from '../../Api/Api'
import {handleGetFiveDayWeather} from '../../Api/Api'
import IranCities from '../../Data/IranCities.json'
import city from '../../Components/Layout/LayoutHeader'

type Props = {
  
}

const Home = (props: Props) => {
  


  const [city, setCity] = useState('tehran');
  
  const [cityWeather , setCityWeather ] = useState({})
  const [cityWeather0, setCityWeather0] = useState({})
  const [cityWeather1, setCityWeather1] = useState({})
  const [cityWeather2, setCityWeather2] = useState({})
  const [cityWeather3, setCityWeather3] = useState({})
  const [cityWeather4, setCityWeather4] = useState({})
  

  const handleGetData = async () => {
      const data = await  handleGetOneDayWeather(city)
      setCityWeather(data)
  }
  const handleGetData5 = async () => {
      const data5 = await  handleGetFiveDayWeather(city)
      setCityWeather0(data5[0])
      setCityWeather1(data5[8])
      setCityWeather2(data5[16])
      setCityWeather3(data5[24])
      setCityWeather4(data5[32])
  }
  
console.log(cityWeather0)
  useEffect(() => {
      handleGetData()
      handleGetData5()
  }, [city])

  return (
    <Grid container justifyContent={'center'} alignItems={'flex-start'} spacing={2}>
      
      <WeatherCard cityWeather={cityWeather}/>
      <Grid container direction={'row'}>
      <Grid>
      <WeatherCard cityWeather={cityWeather0}/>
      </Grid>
      <Grid>
      <WeatherCard cityWeather={cityWeather1}/>
      </Grid>
      <Grid>
      <WeatherCard cityWeather={cityWeather2}/>
      </Grid>
      <Grid>
      <WeatherCard cityWeather={cityWeather3}/>
      </Grid>
      <Grid>
      <WeatherCard cityWeather={cityWeather4}/>
      </Grid>
      
      </Grid>
      
      
    </Grid>
  )
}

export default Home


