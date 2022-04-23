import React, { useEffect, useState } from 'react'
import { Div, Img } from './styles'
import { getHomeInfo } from '../../services/Gets/getHomeInfo'

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
        {homeInfo
          ? (
          <Img
            src={homeInfo.img ? homeInfo.img : ''}
            alt={homeInfo.alt ? homeInfo.alt : 'Hotel Bellas Olas Img'}
          />
            )
          : (
          <h2>Cargando</h2>
            )}
        <div style={{ marginLeft: '30px' }}>
          <h1>Bienvenido a Hotel Bellas Olas </h1>
          <p>
            {homeInfo
              ? homeInfo.homeText
              : 'Nuestra vista al mar le dará el descanso que usted merece. Rodeado de naturaleza y aguas cristalinas, Bellas Olas es el mejor lugar para desconectarse de la rutina y reconectar con la paz.'}
          </p>
        </div>
      </Div>
    </>
  )
}
export default Home
