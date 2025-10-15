import React, { Suspense, useState } from 'react'
import { orange } from '../../constants/color' 
import { Icon, Tooltip} from '@mui/material'
import {Logout, Menu as MenuIcon} from '@mui/icons-material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import Group from '../../pages/Group'
import GroupIcon from '@mui/icons-material/Group'
import { useNavigate } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications'
const Notifications = React.lazy(() => import('../specific/Notifications'));
const Search = React.lazy(() => import('../specific/Search'));
const Newgroup = React.lazy(() => import('../specific/Newgroup'));
import {Backdrop} from '@mui/material'
export default function Header() {
const [isMobile,setisMobile]=useState(false);
const [isGroupOpen,setGroupOpen]=useState(false);
const [isNotificationOpen,setNotificationOpen]=useState(false);
const [isSearchOpen,setSearchOpen]=useState(false);
  const navigate=useNavigate()
  //functions for handling button clicks
function handleMobile(){
  setisMobile(prev=>!prev);
 console.log("clicked")
}
function openSearch(){
  setSearchOpen(prev=>!prev);
  console.log("search clicked")
}
function opennewGroup(){
  setGroupOpen(prev=>!prev);
  console.log("new group clicked")
}
function navigatetoGroup(){
  navigate("/group")
  console.log("navigate to group clicked")
}
function handlelogout(){
  localStorage.removeItem("token")
  navigate("/login")
  console.log("logout clicked")
}

function opennotifications(){
  setNotificationOpen(prev=>!prev);
}
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
            <Box sx={{ flexGrow: 1 }} />
            <Box>

            <CustomIconButton color="inherit" onClick={openSearch} title="Search">
              <SearchIcon/>
            </CustomIconButton>

            <CustomIconButton color="inherit" onClick={opennewGroup} title="New Group">
              <AddIcon/>
            </CustomIconButton>

            <CustomIconButton color="inherit" onClick={navigatetoGroup} title="Manage Group">
              <GroupIcon/>
            </CustomIconButton>

            <CustomIconButton color="inherit" onClick={opennotifications} title="notifications">
              <NotificationsIcon/>
            </CustomIconButton>

            <CustomIconButton color="inherit" onClick={handlelogout} title="Logout">
            <Logout/>
            </CustomIconButton>
            </Box>
      </Toolbar>
    </AppBar>
  </Box>
  {isSearchOpen &&(
    <Suspense fallback={<Backdrop open={true}/>}>
    <Search/>
    </Suspense>
  )}
  {isGroupOpen &&(
    <Suspense fallback={<Backdrop open={true}/>}>
    <Newgroup/>
    </Suspense>
  )}
  {isNotificationOpen&&(
    <Suspense fallback={<Backdrop open={true}/>}>
    <Notifications/>
    </Suspense>
  )}
  </>
  )
}

const CustomIconButton = ({ color, children, onClick,title }: { color: string; children: React.ReactNode; onClick: () => void; title: string }) => {
  return (
    <Tooltip title={title}>
      <IconButton color={color} size="large" onClick={onClick}>
        {children}
      </IconButton>
     </Tooltip>
   )
}