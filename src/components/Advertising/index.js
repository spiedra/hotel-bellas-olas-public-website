/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import { Box, Paper, Button } from '@mui/material'
import { getAdvertisingInfo } from '../../services/Gets/getAdvertisingInfo'
import { LoaderSpinner } from '../Loader'
import Carousel from 'react-material-ui-carousel'

import Logo from '../../assets/logo.png'
import wave from '../../assets/wave.png'

const Advertising = () => {
  const [advertisingInfo, setAdvertisingInfo] = useState()

  useEffect(() => {
    getAdvertisingInfo().then((response) => {
      setAdvertisingInfo(response)
    })
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Box component="h3" sx={{ textAlign: 'start', ml: '1.6rem' }}>
        Publicidad
      </Box>
      {advertisingInfo
        ? (
        <>
          <Carousel>
            {advertisingInfo.map((item, i) => (
              <Item key={i} {...item} />
            ))}
          </Carousel>
        </>
          )
        : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <LoaderSpinner />
        </Box>
          )}
    </Box>
  )
}

const Item = ({ adInfo, adLink, imageBase64 }) => {
  return (
    <Paper sx={{ boxShadow: 'none' }}>
      <a href={adLink} target="_blank" rel="noreferrer">
        <Box
          component="img"
          sx={{
            maxWidth: { xs: 175, md: 220 }
          }}
          alt={adInfo}
          src={`data:image/png;base64,${imageBase64}`}
        />
      </a>
    </Paper>
  )
}

export default Advertising
