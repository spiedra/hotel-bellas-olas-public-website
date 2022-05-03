import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { GetRoomRates } from '../../../services/Gets/getRoomRate'

const RoomAvailability = () => {
  const { roomType } = useParams()
  const [room, setRoom] = useState()

  useEffect(() => {
    GetRoomRates().then((response) => {
      setRoom(
        response.find((item) => {
          return item.category.toLowerCase() === roomType
        })
      )
    })
  }, [])

  return (
    <>
      {room
        ? (
        <Box>
          <h1>{room.category}</h1>
          <Box>{room.description.trim()}</Box>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: 175, md: 180 }
            }}
            alt={room.alt}
            src={room.img}
          />
        </Box>
          )
        : (
            'Cargando'
          )}
    </>
  )
}

export default RoomAvailability
