import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { getHotelContact } from '../../services/Gets/getHotelContact'
import { LoaderSpinner } from '../../components/Loader'

const Contact = () => {
  const [hotelInformation, setHotelInformation] = useState()

  useEffect(() => {
    getHotelContact().then((response) => {
      setHotelInformation(response)
    })
  }, [])

  return (
    <Box>
      {hotelInformation
        ? (
        <>
          <h1>Contáctenos</h1>
          <Box sx={{ ml: '.5rem' }}>
            <h3>{hotelInformation.name}</h3>
            <p>
              <Box
                component="span"
                sx={{ fontWeight: 'bold', display: 'inline' }}
              >
                Descripción:
              </Box>{' '}
              {hotelInformation.description}
            </p>
            <p>
              <Box
                component="span"
                sx={{ fontWeight: 'bold', display: 'inline' }}
              >
                Ubicación:
              </Box>{' '}
              {hotelInformation.location}
            </p>
            <p>
              <Box
                component="span"
                sx={{ fontWeight: 'bold', display: 'inline' }}
              >
                Tel:
              </Box>{' '}
              {hotelInformation.number}
            </p>
            <p>
              <Box
                component="span"
                sx={{ fontWeight: 'bold', display: 'inline' }}
              >
                Correo electrónico:
              </Box>{' '}
              {hotelInformation.email}
            </p>
          </Box>
        </>
          )
        : (
        <LoaderSpinner />
          )}
    </Box>
  )
}

export default Contact
