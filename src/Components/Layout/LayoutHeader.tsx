import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
type Props = {}

const LayoutHeader = (props: Props) => {
  return (
    <AppBar >
        <Typography variant='h4' component='h1'>
            {'هواشناسی'}
        </Typography>
        <Box >

        </Box>
    </AppBar>
  )
}

export default LayoutHeader