import React from 'react'

import { Box } from '@mui/material'

const Advertising = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <Box
        component="img"
        sx={{
          maxWidth: { xs: 175, md: 180 }
        }}
        alt="The house from the offer."
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flongwoodgardens.org%2Fsites%2Fdefault%2Ffiles%2Fhighlight_images%2F137439.jpg&f=1&nofb=1"
      />
    </Box>
  )
}

export default Advertising
