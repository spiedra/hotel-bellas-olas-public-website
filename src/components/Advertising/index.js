import React, { useEffect, useState } from 'react'

import { Box } from '@mui/material'
import { getAdvertisingInfo } from '../../services/Gets/getAdvertisingInfo'

const Advertising = () => {
  const [advertisingInfo, setAdvertisingInfo] = useState()

  useEffect(() => {
    getAdvertisingInfo().then((response) => {
      setAdvertisingInfo(response)
    })
  }, [])

  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      {advertisingInfo
        ? (
        <a href={advertisingInfo.adLink} target="_blank" rel="noreferrer">
          <Box
            component="img"
            sx={{
              maxWidth: { xs: 175, md: 180 }
            }}
            alt={advertisingInfo.alt}
            src={`data:image/png;base64,${advertisingInfo.image}`}
          />
        </a>
          )
        : (
        <h5>Cargando</h5>
          )}
    </Box>
  )
}

export default Advertising
