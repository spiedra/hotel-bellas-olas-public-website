import React, { useEffect, useState } from 'react'
import { Img } from './styles'
import { getHomeInfo } from '../../services/Gets/getHomeInfo'
import { Box } from '@mui/material'
import { LoaderSpinner } from '../../components/Loader'
import ModalResponse from '../../components/ModalResponse'

const Home = () => {
  const [homeInfo, setHomeInfo] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    getHomeInfo().then((response) => {
      setHomeInfo(response)
    })
    if (!localStorage.getItem('cookiesAllowed')) {
      setIsModalOpen(true)
    }
  }, [])

  const onAcceptCookies = () => {
    localStorage.setItem('cookiesAllowed', 'true')
    setIsModalOpen(false)
  }

  const onDeclineCookies = () => {
    localStorage.setItem('cookiesAllowed', 'false')
    setIsModalOpen(false)
  }

  return (
    <>
      <Box>
        <Box component="h1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
          Bienvenido al Hotel Bellas Olas
        </Box>
        {homeInfo
          ? (
          <>
            <Box
              component="p"
              sx={{ lineHeight: '28px', fontSize: '17px', width: '90%' }}
            >
              {homeInfo.homeText}
            </Box>
            <Img
              src={homeInfo.img ? homeInfo.img : ''}
              alt={homeInfo.alt ? homeInfo.alt : 'Hotel Bellas Olas Img'}
            />
          </>
            )
          : (
          <LoaderSpinner />
            )}
      </Box>
      <ModalResponse
        isOpen={isModalOpen}
        onClose={onDeclineCookies}
        onSubmit={onAcceptCookies}
        title={'Mensaje del sistema'}
        content={'Utilizamos cookies para optimizar nuestro sitio web y nuestro servicio'}
      />
    </>
  )
}
export default Home
