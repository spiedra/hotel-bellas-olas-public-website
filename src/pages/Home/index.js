import React, { useEffect, useState } from 'react'
import { Div, Img } from './styles'
import { getHomeInfo } from '../../services/Gets/getHomeInfo'
import { Box } from '@mui/material'
import { LoaderSpinner } from '../../components/Loader'

const Home = () => {
  const [homeInfo, setHomeInfo] = useState()

  useEffect(() => {
    getHomeInfo().then((response) => {
      console.log(response)
      setHomeInfo(response)
    })
  }, [])

  return (
    <>
      <Div>
        <Box>
          <Box component="h1" sx={{ mt: 0 }}>
            Bienvenido a Hotel Bellas Olas{' '}
          </Box>
          <Box
            component="p"
            sx={{ lineHeight: '28px', fontSize: '17px', width: '90%' }}
          >
            {homeInfo
              ? homeInfo.homeText
              : 'Nuestra vista al mar le dará el descanso que usted merece. Rodeado de naturaleza y aguas cristalinas, Bellas Olas es el mejor lugar para desconectarse de la rutina y reconectar con la paz.'}
          </Box>
        </Box>
        {homeInfo
          ? (
          <Img
            src={homeInfo.img ? homeInfo.img : ''}
            alt={homeInfo.alt ? homeInfo.alt : 'Hotel Bellas Olas Img'}
          />
            )
          : (
            <LoaderSpinner />
            )}
      </Div>
    </>
  )
}
export default Home
