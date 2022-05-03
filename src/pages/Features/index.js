import React, { useEffect, useState } from 'react'

import { GetHotelFeatures } from '../../services/Gets/getFeatures'
import {
  FeatureConstainer,
  FeatureItem,
  FeatureImage,
  FeatureDescription
} from './styles'

const Features = () => {
  const [features, setFeatures] = useState()
  useEffect(() => {
    GetHotelFeatures().then((response) => {
      setFeatures(response)
    })
  }, [])
  return (
    <>
      <h1>Facilidades</h1>
      <FeatureConstainer>
        {features
          ? (
          <>
            {features.map((feat, index) => (
              <FeatureItem key={index}>
                <FeatureImage src={feat.img} />
                <FeatureDescription>{feat.feature.trim()}</FeatureDescription>
              </FeatureItem>
            ))}
          </>
            )
          : (
          <></>
            )}
      </FeatureConstainer>
    </>
  )
}

export default Features
