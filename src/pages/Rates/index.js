import React, { useEffect, useState } from 'react'

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { LoaderSpinner } from '../../components/Loader'
import { GetRoomRates } from '../../services/Gets/getRoomRate'

const Rates = () => {
  const [rates, setRates] = useState()
  useEffect(() => {
    GetRoomRates().then((response) => {
      setRates(response)
    })
  }, [])
  return (
    <>
      <h1>Tarifas</h1>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '44px'
        }}
      >
        {rates
          ? (
          <>
            {rates.map((item, index) => (
              <Card key={index} sx={{ maxWidth: 345, minWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="165"
                    image={item.img}
                    alt={`Imagen de ${item.category}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                      {item.category}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: '28px', fontSize: '16px' }}
                    >
                      {item.description.trim()}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: '28px',
                        fontSize: '15px',
                        mt: '1rem',
                        fontWeight: 'bold'
                      }}
                    >
                      Precio regular: ₡{item.cost}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </>
            )
          : (
          <LoaderSpinner />
            )}
      </Box>
    </>
  )
}

export default Rates
