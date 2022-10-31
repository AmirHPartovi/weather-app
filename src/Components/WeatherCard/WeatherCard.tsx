import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useState,useEffect} from 'react'
import {handleGetOneDayWeather} from '../../Api/Api'
import {Link} from 'react-router-dom'

type Props = {
 cityWeather:any,
 city:string
 
}

const WeatherCard = ({cityWeather,city}: Props) => {

 console.log(cityWeather);
    const icon =`owf owf-${cityWeather?.cod} owf-5zx`
  return (
    <Grid container item xs={12} p={2} dir={'rtl'} mt={6}>
            <Grid item xs={12} md={3} bgcolor={'primary.main'} borderRadius={2} color={'common.white'} p={2}>
            <i className={icon} style={{fontSize:'5rem'}}/>
                <Typography variant={'body1'}>
                    شهر: {cityWeather.name}
                </Typography>
                <Typography variant={'body1'}>
                    سرعت باد: {cityWeather?.wind?.speed}
                </Typography>
                <Typography variant={'body1'}>
                    میزان ابری بودن: {cityWeather?.clouds?.all}
                </Typography>
                <Typography variant={'body1'}>
                    دما: {cityWeather?.main?.temp}
                </Typography>
                <Typography variant={'body1'}>
                    وضعیت هوا: {cityWeather?.weather?.[0]?.description}
                </Typography>
                <Link to={`/weather/${city}`}>
                    <Button sx={{bgcolor:'common.white'}}>
                        {'مشاهده 4 روز آینده'}
                    </Button>
                </Link>
            </Grid>
        </Grid>
  )
}

export default WeatherCard

{/* <i className={icon} style={{fontSize:'5rem'}}/> */}