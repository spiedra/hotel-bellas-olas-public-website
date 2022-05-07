import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { navbarItems } from './consts/index'
import { navbarStyles } from './styles'
import Logo from '../../assets/wave.png'

import Advertising from '../Advertising'

const drawerWidth = 240

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen)
  }

  const drawer = useMemo(
    () => (
      <Box>
        <Toolbar sx={navbarStyles.toolbarClose}>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {navbarItems.map((item) => (
            <ListItem
              sx={{ pl: '2.5rem' }}
              button
              key={item.id}
              onClick={() => {
                navigate(item.route)
              }}
            >
              <ListItemText sx={navbarStyles.text} primary={item.label} />
            </ListItem>
          ))}
        </List>
        {<Advertising />}
      </Box>
    ),
    [isOpen]
  )

  return (
    <>
      <AppBar sx={navbarStyles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={navbarStyles.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Box component="span" sx={{ mr: '.5rem' }}>
            <img
              src={Logo}
              width="64"
              height="64"
              alt="Hotel bellas olas logo"
            />
          </Box>
          <Typography variant="h6" noWrap component="div">
            Hotel Bellas Olas
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={navbarStyles.nav}>
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              height: '100vh',
              position: 'static',
              textAlign: 'center'
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Navbar
