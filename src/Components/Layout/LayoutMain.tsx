import React from 'react'
import {Outlet} from 'react-router-dom'
import LayoutHeader from './LayoutHeader'
import Grid from '@mui/material/Grid'
type Props = {}

const LayoutMain = (props: Props) => {
  return (
    <Grid>
        <LayoutHeader/>
        <main>
        <Outlet/>
    </main>
    </Grid>
  )
}

export default LayoutMain