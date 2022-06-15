import { Box } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box sx={{ mt: '3rem', ml: '1.5rem' }}>
      <h1>Contáctenos</h1>
      <Box sx={{ ml: '.5rem' }}>
        <h3>Hotel Bellas Olas</h3>
        <p>
          <Box component="span" sx={{ fontWeight: 'bold', display: 'inline' }}>
            Tel:
          </Box>{' '}
          22520034 / 22520035
        </p>
        <p>
          <Box component="span" sx={{ fontWeight: 'bold', display: 'inline' }}>
            Código postal:
          </Box>{' '}
          61101
        </p>
        <p>
          <Box component="span" sx={{ fontWeight: 'bold', display: 'inline' }}>
            Correo electrónico:
          </Box>{' '}
          info@bellasolas.com
        </p>
      </Box>
    </Box>
  )
}

export default Contact
