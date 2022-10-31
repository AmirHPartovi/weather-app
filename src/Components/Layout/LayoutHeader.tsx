import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Select } from '@mui/material'
import IranCities from '../../Data/IranCities.json'

type Props = {}

const LayoutHeader = (props: Props) => {

  
  return (
    <AppBar sx={{display:'flex',direction:'row'}}>
        <Typography variant='h4' component='h1'>
            {'هواشناسی'}
        </Typography>
        <Box width={250} justifyContent={'end'}>
          <FormControl fullWidth>
            <InputLabel>{'انتخاب شهر'}</InputLabel>
            <Select label='انتخاب شهر' >
              {IranCities.map(c=>
                <MenuItem >{c.title}</MenuItem>
                )}
          {/* <MenuItem value={10}>Ten</MenuItem> */}
          
        </Select>
          </FormControl>
        </Box>
        
    </AppBar>
  )
}

export default LayoutHeader