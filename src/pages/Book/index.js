import React from 'react'

import { useNavigate } from 'react-router'

import { Controller, useForm } from 'react-hook-form'

import { Box, Grid, MenuItem, Button, TextField } from '@mui/material'
import { learningStyles } from './styles'

const Book = () => {
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

  const navigate = useNavigate()

  const onSubmit = (values) => {
    navigate(`/book/checkout/${values.tipoHabitacion}`)
  }

  return (
    <Box sx={learningStyles.instructionsContainer}>
      <h1>Reservar en Linea</h1>
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
                  <MenuItem value="suite">Suite</MenuItem>
                  <MenuItem value="junior">Junior</MenuItem>
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
  )
}

export default Book
