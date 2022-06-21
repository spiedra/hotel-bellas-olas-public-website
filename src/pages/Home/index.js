import React, { useEffect, useState } from 'react'
import { Img } from './styles'
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
    </>
  )
}
export default Home
