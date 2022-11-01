import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IranCities from '../../Data/IranCities.json'
import LocationOnIcon from '@mui/icons-material/LocationOn';
type Props = {}

const CityList = (props: Props) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <form aria-label="main mailbox folders">
        <List>
            {IranCities.map(item =>( 
 <ListItem disablePadding>
 <ListItemButton>
   <ListItemIcon>
     <LocationOnIcon />
   </ListItemIcon>
   <ListItemText>{item.title}</ListItemText>
 </ListItemButton>
</ListItem>
))}
         
          </List>
          </form>
          </Box>
  )
}

export default CityList