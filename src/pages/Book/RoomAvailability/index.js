/* eslint-disable no-unused-vars */
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Controller, useForm } from 'react-hook-form'

import { Button, Grid, MenuItem, TextField } from '@mui/material'

import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'

import { roomAvailabilityStyles, Label } from './styles'
import { LoaderSpinner } from '../../../components/Loader'

import { createReservation } from '../../../services/Posts/createReservation'
import { GetRoomRates } from '../../../services/Gets/getRoomRate'
const RoomAvailability = () => {
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false)
  const { roomType } = useParams()
  const [room, setRoom] = useState()
  const [userInfo, setUserInfo] = useState({
    name: 'default',
    lastname: 'default',
    email: 'default@gmail.com',
    creditCard: '232543',
    creditCardDate: '444',
    creditCardCVV: '221'
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      tipoHabitacion: '',
      start: '',
      end: ''
    }
  })

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit
  // } = useForm()
  // const onSubmit = (e) => {
  //   const info = {
  //     Name: e.name,
  //     Lastname: e.lastname,
  //     Email: e.email,
  //     CreditCardNumber: e.creditCard,
  //     CreditCardDate: e.creditCardDate,
  //     CreditCardCVV: e.creditCardCVV,
  //     RoomType: reservationInfo[2],
  //     ArrivalDate: reservationInfo[0],
  //     DepartureDate: reservationInfo[1]
  //   }
  //   createReservation(info).then(response => {
  //     setModalInfo({ msg: response, isOpen: true })
  //   })
  // }

  const [modalInfo, setModalInfo] = useState({ isOpen: false, msg: '' })

  const params = useParams()
  const [reservationInfo, setReservationInfo] = useState(['', '', '', '', ''])
  // const [room, setRoom] = useState()

  useEffect(() => {
    setReservationInfo(params.roomType.split('+'))
    GetRoomRates().then((response) => {
      setRoom(
        response.find((item) => {
          return (
            item.category.toLowerCase() ===
            params.roomType.split('+')[2].toLowerCase()
          )
        })
      )
    })
  }, [])

  const onSubmit = (e) => {
    setUserInfo(e)
    setIsOpenModalConfirm(true)
  }

  return (
    <Box sx={{ mt: '3rem', ml: '1.5rem' }}>
      {room
        ? (
        <Box>
          <h1>Reservar en Línea</h1>
          <h3>Habitación disponible</h3>

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
          )
        : (
        <LoaderSpinner />
          )}

      <Box
        component="form"
        my="3rem"
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
              name="cvv"
              rules={{ required: true }}
              render={({ field: { ...field } }) => (
                <TextField
                  sx={roomAvailabilityStyles.select}
                  {...field}
                  type="number"
                  error={!!errors.creditCard}
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
          onClick={handleSubmit}
        >
          Cancelar
        </Button>
      </Box>

      {/* <form className="formStyle" noValidate onSubmit={handleSubmit(onSubmit)}>
        <label> Monto de su reservación: $XYZ </label>
        <br></br>
        <Label>Nombre: </Label>
        <input
          className="name"
          {...register('name', { required: !!errors })}
          type="text"
        />
        {errors
          ? (
              errors.name && (
            <p style={{ color: 'red', fontSize: '15px' }}>
              {'*ingrese el nombre'}
            </p>
              )
            )
          : (
          <></>
            )}
        <br></br>
        <Label>Apellidos: </Label>
        <input {...register('lastname', { required: !!errors })} type="text" />
        {errors
          ? (
              errors.lastname && (
            <p style={{ color: 'red', fontSize: '15px' }}>
              {'*ingrese los apellidos'}
            </p>
              )
            )
          : (
          <></>
            )}
        <br></br>
        <Label>Email: </Label>
        <input {...register('email', { required: !!errors })} type="email" />
        {errors
          ? (
              errors.email && (
            <p style={{ color: 'red', fontSize: '15px' }}>
              {'*ingrese el email'}
            </p>
              )
            )
          : (
          <></>
            )}
        <br></br>
        <label>Tarjeta de crédito: </label>
        <input
          {...register('creditCard', { required: !!errors })}
          type="number"
        />
        {errors
          ? (
              errors.creditCard && (
            <p style={{ color: 'red', fontSize: '15px' }}>
              {'*ingrese el número de tarjeta'}
            </p>
              )
            )
          : (
          <></>
            )}
        <br></br>
        <label>Fecha vencimiento: </label>
        <input
          {...register('creditCardDate', { required: !!errors })}
          type="text"
        />
        {errors
          ? (
              errors.creditCard && (
            <p style={{ color: 'red', fontSize: '15px' }}>
              {'*ingrese la fecha de la tarjeta'}
            </p>
              )
            )
          : (
          <></>
            )}
             <br></br>
            <label>CVV: </label>
        <input
          {...register('creditCardCVV', { required: !!errors })}
          type="number"
        />
        {errors
          ? (
              errors.creditCard && (
            <p style={{ color: 'red', fontSize: '15px' }}>
              {'*ingrese el cvv'}
            </p>
              )
            )
          : (
          <></>
            )}
             <br></br>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            marginTop: '20px',
            marginRight: '50px'
          }}
        >
          Aceptar
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: '20px',
            marginLeft: '50px'
          }}
        >
          Cancelar
        </Button>
      </form> */}
      {/* <CustomModal
        props={{ title: '', isOpen: isOpenModalConfirm }}
        methods={{
          toggleOpenModal: () => setIsOpenModalConfirm(!isOpenModalConfirm)
        }}
      >
        <h1>Reservación finalizada!</h1>
        <p>
          Gracias {userInfo.name}!! Su reservación fue realizada exitosamente
          Acabamos de enviar esta información a la dirección {userInfo.email}{' '}
          para mayor facilidad
        </p>
      </CustomModal> */}
    </Box>
  )
}

export default RoomAvailability
