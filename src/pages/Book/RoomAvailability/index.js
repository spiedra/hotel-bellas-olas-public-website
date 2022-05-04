import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { GetRoomRates } from '../../../services/Gets/getRoomRate'

import { useForm } from 'react-hook-form'

import { Button } from '@mui/material'

import CustomModal from '../../../components/CustomModal'

const RoomAvailability = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'default',
    lastname: 'default',
    email: 'default@gmail.com',
    creditCard: '232543'
  })
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = (e) => {
    setUserInfo(e)
    setIsOpenModalConfirm(true)
  }
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false)

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

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <label> Monto de su reservación: $XYZ </label>
        <br></br>
        <label>Nombre: </label>
        <input {...register('name', { required: !!errors })} type="text" />
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
        <label>Apellidos: </label>
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

        <label>Email: </label>
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

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            marginTop: '50px',
            marginRight: '50px'
          }}
        >
          Aceptar
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: '50px',
            marginLeft: '50px'
          }}
        >
          Cancelar
        </Button>
      </form>
      <CustomModal
        props={{ title: '', isOpen: isOpenModalConfirm }}
        methods={{
          toggleOpenModal: () => setIsOpenModalConfirm(!isOpenModalConfirm)
        }}
      >
        <h1>Reservar en Línea</h1>
        <h3>Reservación finalizada!</h3>
        <h3>
          Gracias {userInfo.name}!! Su reservación fue realizada exitosamente
        </h3>
        <h3>
          Acabamos de enviar esta información a la dirección {userInfo.email}{' '}
          para mayor facilidad
        </h3>
      </CustomModal>
    </>
  )
}

export default RoomAvailability
