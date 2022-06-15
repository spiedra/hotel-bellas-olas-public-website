import React, { useEffect, useState } from 'react'

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
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
    <Box sx={{ mt: '3rem', ml: '1.5rem' }}>
      <h1>Tarifas</h1>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        {rates
          ? (
          <>
            {rates.map((item, index) => (
              // <RateItem key={index}>
              //   <RateImage src={rate.img} />
              //   <RateDescription>
              //     <h2>Habitación {rate.category}</h2>
              //     {rate.description.trim()}
              //     <RateCost>Precio regular: ₡{rate.cost}</RateCost>
              //   </RateDescription>
              // </RateItem>
              <Card key={index} sx={{ maxWidth: 345 }}>
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
                      sx={{ lineHeight: '28px', fontSize: '15px' }}
                    >
                      {item.description.trim()}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: '28px', fontSize: '15px', mt: '1rem', fontWeight: 'bold' }}
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
    </Box>
  )
}

export default Rates
