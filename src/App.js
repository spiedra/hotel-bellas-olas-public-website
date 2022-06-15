import React from 'react'
import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'
import Navbar from './components/Navbar'

function App () {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: 6,
          paddingBottom: 3,
          paddingLeft: 2,
          paddingRight: 2
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default App
