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
        ? <Box
          component="img"
          sx={{
            maxWidth: { xs: 175, md: 180 }
          }}
          alt={advertisingInfo.alt}
          src={`data:image/png;base64,${advertisingInfo.image}`}
        />
        : <h5>Cargando</h5>}
    </Box>
  )
}

export default Advertising
