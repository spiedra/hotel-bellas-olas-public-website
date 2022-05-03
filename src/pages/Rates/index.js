import React, { useEffect, useState } from 'react'
import { GetRoomRates } from '../../services/Gets/getRoomRate'
import {
  RateConstainer,
  RateImage,
  RateDescription,
  RateItem,
  RateCost
} from './styles'

const Rates = () => {
  const [rates, setRates] = useState()
  useEffect(() => {
    GetRoomRates().then((response) => {
      setRates(response)
    })
  }, [])
  return (
    <>
      <h1>Tarifas</h1>
      <RateConstainer>
        {rates
          ? (
          <>
            {rates.map((rate, index) => (
              <RateItem key={index}>
                <RateImage src={rate.img} />
                <RateDescription>
                  <h2>Habitación {rate.category}</h2>
                  {rate.description.trim()}
                  <RateCost>Precio regular: ₡{rate.cost}</RateCost>
                </RateDescription>
              </RateItem>
            ))}
          </>
            )
          : (
          <></>
            )}
      </RateConstainer>
    </>
  )
}

export default Rates
