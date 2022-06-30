import React, { useEffect, useState } from 'react'

import { Box, Paper } from '@mui/material'
import { getAdvertisingInfo } from '../../services/Gets/getAdvertisingInfo'
import { LoaderSpinner } from '../Loader'
import Carousel from 'react-material-ui-carousel'

const Advertising = () => {
  const [advertisingInfo, setAdvertisingInfo] = useState()

  useEffect(() => {
    getAdvertisingInfo().then((response) => {
      console.log(response)
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

const Item = ({ adInfo, adLink, img }) => {
  return (
    <Paper sx={{ boxShadow: 'none' }}>
      <a href={adLink} target="_blank" rel="noreferrer">
        <Box
          component="img"
          sx={{ maxWidth: { xs: 175, md: 200 } }}
          alt={adInfo}
          src={img}
        />
      </a>
    </Paper>
  )
}

export default Advertising
