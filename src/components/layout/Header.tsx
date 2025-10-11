import React from 'react'
import { orange } from '../../constants/color' 
import { Icon} from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
function handleMobile(){
 console.log("clicked")
}
export default function Header() {
  return (<>
  <Box sx={{ flexGrow: 1 }} height={"4rem"}>
    <AppBar position="static" sx={{bgcolor:orange}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Chat App
        </Typography>
        <Box sx={{display:{xs:"block",sm:"none"}}}>
            <IconButton color="inherit" onClick={handleMobile}><MenuIcon/></IconButton>
            </Box>
      </Toolbar>
    </AppBar>
  </Box>
  </>
  )
}
