import React, { useEffect, useState } from 'react'

import { Box } from '@mui/material'
import { getAdvertisingInfo } from '../../services/Gets/getAdvertisingInfo'
import { LoaderSpinner } from '../Loader'

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
          <a href={advertisingInfo.adLink} target="_blank" rel="noreferrer">
            <Box
              component="img"
              sx={{
                maxWidth: { xs: 175, md: 220 }
              }}
              alt={advertisingInfo.alt}
              src={`data:image/png;base64,${advertisingInfo.image}`}
            />
          </a>
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

export default Advertising
