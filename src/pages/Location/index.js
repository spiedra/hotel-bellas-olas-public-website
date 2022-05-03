import React, { useState, useEffect } from 'react'

import { Box } from '@mui/system'
import { getHotelLocation } from '../../services/Gets/getHotelLocation'

const Location = () => {
  const [hotelLocation, setHotelLocation] = useState({ address: '' })

  useEffect(() => {
    getHotelLocation().then((response) => {
      setHotelLocation(response)
    })
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ mt: '.8rem', textAlign: 'start', width: '100%' }}>
        <h1>Ubicación</h1>
      </Box>
      <Box sx={{}}>
        <Box component="p">{hotelLocation.address}</Box>
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31470.0862407764!2d-84.64360732269773!3d9.615854772252517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1c76ab9610c83%3A0x1bf37effa58fddf6!2sPuntarenas%20Province%2C%20Jaco!5e0!3m2!1sen!2scr!4v1651593624222!5m2!1sen!2scr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  )
}

export default Location
