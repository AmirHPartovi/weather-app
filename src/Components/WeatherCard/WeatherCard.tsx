import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
type Props = {}

const WeatherCard = (props: Props) => {

    const icon =`owf owf-${200} owf-5zx`
  return (
    <IconButton sx={{m:4,p:4}}>
    <Box width='250' height='400'>
    <i className={icon} style={{fontSize:'5rem'}}/>
    </Box>
    </IconButton>
  )
}

export default WeatherCard