/* eslint-disable no-unused-vars */
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { Button } from '@mui/material'

import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'

import { Label } from './styles'
import { createReservation } from '../../../services/Posts/createReservation'
import { GetRoomRates } from '../../../services/Gets/getRoomRate'
const RoomAvailability = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'default',
    lastname: 'default',
    email: 'default@gmail.com',
    creditCard: '232543',
    creditCardDate: '444',
    creditCardCVV: '221'
  })

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = (e) => {
    const info = {
      Name: e.name,
      Lastname: e.lastname,
      Email: e.email,
      CreditCardNumber: e.creditCard,
      CreditCardDate: e.creditCardDate,
      CreditCardCVV: e.creditCardCVV,
      RoomType: reservationInfo[2],
      ArrivalDate: reservationInfo[0],
      DepartureDate: reservationInfo[1]
    }
    createReservation(info).then(response => {
      setModalInfo({ msg: response, isOpen: true })
    })
  }

  const [modalInfo, setModalInfo] = useState({ isOpen: false, msg: '' })

  const params = useParams()
  const [reservationInfo, setReservationInfo] = useState(['', '', '', '', ''])
  const [room, setRoom] = useState()
  useEffect(() => {
    setReservationInfo(params.roomType.split('+'))
    GetRoomRates().then((response) => {
      setRoom(
        response.find((item) => {
          return item.category.toLowerCase() === params.roomType.split('+')[2].toLowerCase()
        })
      )
    })
  }, [])

  return (
    <>
      {room
        ? (
        <Box>
          <h1>Reservar en Línea</h1>
          <h3>Habitación disponible</h3>

          <Box
            sx={{
              marginLeft: '300px',
              marginRight: '50px',
              textAlign: 'justify'
            }}
          >
            {room.description.trim()}

          </Box>
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

      <form className='formStyle' noValidate onSubmit={handleSubmit(onSubmit)}>
        <label> Monto de su reservación: ₡{reservationInfo[3]} </label>
        <br></br>
        <Label>Nombre: </Label>
        <input className='name' {...register('name', { required: !!errors })} type="text" />
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
      </form>
      <Dialog
          open={modalInfo.isOpen}
          onClose={() => setModalInfo({ isOpen: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Mensaje del sistema</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {modalInfo.msg}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setModalInfo({ isOpen: false })}
              color="primary"
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>
    </>
  )
}

export default RoomAvailability
