import React from 'react'
import Drawer from '@mui/material/Drawer'
import CityList from './CityList'
type Props = {}

const LayoutSidebar = (props: Props) => {
  return (
    <Drawer anchor='right' variant="permanent"
    open={true} sx={{width:250}}>
      <CityList/>
    </Drawer>
  )
}

export default LayoutSidebar