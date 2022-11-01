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

 
}

const WeatherCard = ({cityWeather}: Props) => {

 console.log(cityWeather);
    const icon =`owf owf-${cityWeather?.cod} owf-5zx`
  return (
    <Grid container direction={'column'} alignItems={'center'} xs={8} p={2} dir={'rtl'} mt={8} >
            <Grid item xs={8} md={3} bgcolor={'primary.main'} borderRadius={2} color={'common.white'} p={2} textAlign={'center'} >
            <i className={icon} style={{fontSize:'8rem'}} />
                <Typography variant={'h5'} textAlign={'center'}>
                     {cityWeather.name}
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
                <Grid container direction={'row'} justifyContent={'center'} xs={8}>
                    
                </Grid>
            </Grid>
        </Grid>
  )
}

export default WeatherCard

{/* <i className={icon} style={{fontSize:'5rem'}}/> */}