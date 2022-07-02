import React, { useState } from 'react'

import { useNavigate } from 'react-router'

import { Controller, useForm } from 'react-hook-form'

import { Box, Grid, MenuItem, Button, TextField } from '@mui/material'
import { learningStyles } from './styles'
import { getReservationAvailability } from '../../services/Posts/getReservationAvailability'

import ModalResponse from '../../components/ModalResponse'

const Book = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState()
  const navigate = useNavigate()

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

  const onSubmit = (values) => {
    getReservationAvailability({
      ArrivalDate: values.start,
      DepartureDate: values.end,
      RoomType: values.tipoHabitacion
    }).then((response) => {
      if (Number.isInteger(response)) {
        navigate(
          `/book/checkout/${
            values.start +
            '+' +
            values.end +
            '+' +
            values.tipoHabitacion +
            '+' +
            response
          }`
        )
      } else {
        setModalMessage(response)
        setIsModalOpen(true)
      }
    })
  }

  return (
    <>
      <Box>
        <h1>Reservar en Linea</h1>
        <Box
          component="form"
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
                name="start"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    type="date"
                    error={!!errors.start}
                    label="Fecha de Llegada"
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="end"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    type="date"
                    error={!!errors.end}
                    InputLabelProps={{ shrink: true }}
                    label="Fecha de Salida"
                  ></TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="tipoHabitacion"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.tipoHabitacion}
                    label="Tipo de Habitación"
                  >
                    <MenuItem value="Suite">Suite</MenuItem>
                    <MenuItem value="Junior">Junior</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={learningStyles.button}
            onClick={handleSubmit}
          >
            Aceptar
          </Button>
        </Box>
      </Box>

      <ModalResponse
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => setIsModalOpen(false)}
        title={'Mensaje del sistema'}
        content={modalMessage}
      />
    </>
  )
}

export default Book
