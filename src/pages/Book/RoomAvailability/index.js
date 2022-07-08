import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Controller, useForm } from 'react-hook-form'

import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'

import { createReservation } from '../../../services/Posts/createReservation'
import { GetRoomRates } from '../../../services/Gets/getRoomRate'

import { LoaderSpinner } from '../../../components/Loader'

import { roomAvailabilityStyles } from './styles'
import ConfirmationMessage from '../ConfirmationMessage'

const RoomAvailability = () => {
  const { roomType } = useParams()
  const [room, setRoom] = useState()
  const [result, setResult] = useState()
  const [reservationInfo, setReservationInfo] = useState(['', '', '', '', ''])

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      creditCard: '',
      expirationDate: '',
      creditCardCVV: ''
    }
  })

  useEffect(() => {
    setReservationInfo(roomType.split('+'))
    GetRoomRates().then((response) => {
      setRoom(
        response.find((item) => {
          return (
            item.category.toLowerCase() === roomType.split('+')[2].toLowerCase()
          )
        })
      )
    })
  }, [])

  const onSubmit = (values) => {
    setRoom()
    createReservation({
      Name: values.name,
      Lastname: values.lastName,
      Email: values.email,
      CreditCardNumber: values.creditCard,
      CreditCardDate: values.expirationDate,
      CreditCardCVV: values.creditCardCVV,
      RoomType: reservationInfo[2],
      EntryDate: reservationInfo[0],
      DepartureDate: reservationInfo[1]
    }).then((response) => {
      setResult(response)
    })
  }

  const handleCancel = () => {
    reset({
      defaultValues: {
        name: '',
        lastName: '',
        email: '',
        creditCard: '',
        expirationDate: '',
        creditCardCVV: ''
      }
    })
  }

  return (
    <>
      {!result
        ? (
        <>
          <Box>
            <h1>Reservar en Línea</h1>
            {room
              ? (
              <>
                <Box>
                  <h3>Tipo de habitación seleccionada: {room.category}</h3>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: { xs: 'wrap', md: 'nowrap' }
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        maxWidth: { xs: 150, md: 350 }
                      }}
                      alt={room.alt}
                      src={room.img}
                    />
                    <Box
                      component="p"
                      sx={{
                        textAlign: 'justify',
                        mt: 0,
                        lineHeight: '28px',
                        fontSize: '17px',
                        mx: { xs: '0', md: '1.5rem' }
                      }}
                    >
                      {room.description.trim()}
                    </Box>
                  </Box>
                </Box>

                <Box component="h3">
                  Monto de reservación: ₡{reservationInfo[3]}
                </Box>
                {parseInt(reservationInfo[4]) !== parseInt(reservationInfo[3]) && (
                  <Box component="h3">
                    Monto de reservación con el descuento actual: ₡{reservationInfo[4]}
                  </Box>
                )}
                <Box
                  component="form"
                  mb="3rem"
                  sx={{
                    width: { xs: '100%', md: '70%' },
                    '& .MuiTextField-root': {
                      my: 1,
                      width: { xs: '37ch', md: '41ch' }
                    }
                  }}
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Grid
                    container
                    justifyContent="flex-start"
                    spacing={{ xs: 0.5, sm: 0.5, md: 2 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item>
                      <Controller
                        control={control}
                        name="name"
                        rules={{ required: true }}
                        render={({ field: { ...field } }) => (
                          <TextField
                            sx={roomAvailabilityStyles.select}
                            {...field}
                            type="text"
                            error={!!errors.name}
                            label="Nombre"
                          ></TextField>
                        )}
                      />
                    </Grid>
                    <Grid item>
                      <Controller
                        control={control}
                        name="lastName"
                        rules={{ required: true }}
                        render={({ field: { ...field } }) => (
                          <TextField
                            sx={roomAvailabilityStyles.select}
                            {...field}
                            type="text"
                            error={!!errors.lastName}
                            label="Apellidos"
                          ></TextField>
                        )}
                      />
                    </Grid>
                    <Grid item>
                      <Controller
                        control={control}
                        name="email"
                        rules={{ required: true }}
                        render={({ field: { ...field } }) => (
                          <TextField
                            sx={roomAvailabilityStyles.select}
                            {...field}
                            type="text"
                            error={!!errors.email}
                            label="Email"
                          ></TextField>
                        )}
                      />
                    </Grid>
                    <Grid item>
                      <Controller
                        control={control}
                        name="creditCard"
                        rules={{ required: true }}
                        render={({ field: { ...field } }) => (
                          <TextField
                            sx={roomAvailabilityStyles.select}
                            {...field}
                            type="number"
                            error={!!errors.creditCard}
                            label="Tarjeta de crédito:"
                          ></TextField>
                        )}
                      />
                    </Grid>
                    <Grid item>
                      <Controller
                        control={control}
                        name="expirationDate"
                        rules={{ required: true }}
                        render={({ field: { ...field } }) => (
                          <TextField
                            sx={roomAvailabilityStyles.select}
                            {...field}
                            type="text"
                            error={!!errors.expirationDate}
                            label="Fecha de vencimiento"
                          ></TextField>
                        )}
                      />
                    </Grid>
                    <Grid item>
                      <Controller
                        control={control}
                        name="creditCardCVV"
                        rules={{ required: true }}
                        render={({ field: { ...field } }) => (
                          <TextField
                            sx={roomAvailabilityStyles.select}
                            {...field}
                            type="number"
                            error={!!errors.creditCardCVV}
                            label="CVV"
                          ></TextField>
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      marginTop: '1.5rem',
                      marginBottom: '2rem'
                    }}
                    onClick={handleSubmit}
                  >
                    Aceptar
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      marginTop: '1.5rem',
                      marginBottom: '2rem',
                      ml: '1rem'
                    }}
                    onClick={handleCancel}
                  >
                    Cancelar
                  </Button>
                </Box>
              </>
                )
              : (
              <LoaderSpinner />
                )}
          </Box>
        </>
          )
        : (
        <ConfirmationMessage {...result} />
          )}
    </>
  )
}

export default RoomAvailability
