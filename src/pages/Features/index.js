import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LoaderSpinner } from '../../components/Loader'
import { GetHotelFeatures } from '../../services/Gets/getFeatures'

const Features = () => {
  const [features, setFeatures] = useState()

  useEffect(() => {
    GetHotelFeatures().then((response) => {
      setFeatures(response)
    })
  }, [])

  return (
    <Box sx={{ mt: '3rem', ml: '1.5rem' }}>
      <h1>Facilidades</h1>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px'
        }}
      >
        {features
          ? (
          <>
            {features.map((item, index) => (
              <Card key={index} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt={`Imagen de ${item.name}`}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: '28px', fontSize: '15px' }}
                    >
                      {item.feature.trim()}
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

export default Features
