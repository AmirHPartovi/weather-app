import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import {Autocomplete,TextField,Grid, MenuItem, Select } from '@mui/material'
import IranCities from '../../Data/IranCities.json'
import {useState} from 'react'


type Props = {

}

const LayoutHeader = (props: Props) => {

  const iran = IranCities.map(c => c.title)
 
  
  return (
    <Grid container direction={'row'} justifyContent={'space-around'} p={2}>
        <Typography variant='h3' component='h1'>
            {'هواشناسی ایران'}
        </Typography>
        <Box width={250} justifyContent={'end'}>
          
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={iran}
     
      sx={{ width: 300 }}
      renderInput={(params) => <TextField variant='outlined' {...params} label="شهر های ایران" />}
    />
        </Box>
        
        </Grid>
  )
}

export default LayoutHeader
