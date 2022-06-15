/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 6,
            height: '100%',
            paddingLeft: 2,
            paddingRight: 2
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default App
