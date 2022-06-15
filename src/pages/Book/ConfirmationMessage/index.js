import React from 'react'

import { Button } from '@mui/material'
import { Box } from '@mui/system'

import { useNavigate } from 'react-router'

const ConfirmationMessage = ({ name, email }) => {
  const navigate = useNavigate()

  const handleSubmit = () => navigate('/book')

  return (
    <>
      <Box sx={{ mt: '3rem', ml: '1.5rem' }}>
        <h1>Reservar en Línea</h1>
        <p>¡Reservación realizada!</p>
        <p>
          ¡Gracias{' '}
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            {name}
          </Box>
          ! Su reservación fue relizada exitosamente.
        </p>
        <p>
          Acabamos de enviar esta información a la dirección al correo
          electronico:{' '}
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            {email}
          </Box>
        </p>
        <p>¡Gracias por preferirnos!</p>
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
      </Box>
    </>
  )
}

export default ConfirmationMessage
