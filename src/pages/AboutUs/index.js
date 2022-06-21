import React, { useEffect, useState } from 'react'
import {
  Gallery,
  GalleryPicture,
  DisplayImg,
  ImageContainer,
  AboutUsText
} from './styles'

import { getAboutUsInfo } from '../../services/Gets/getAboutUsInfo'
import { LoaderSpinner } from '../../components/Loader'
import { Box } from '@mui/material'

const AboutUs = () => {
  const [aboutUsInfo, setAboutUsInfo] = useState()
  const [imgDisplay, setImgDisplay] = useState()

  useEffect(() => {
    getAboutUsInfo().then((response) => {
      setAboutUsInfo(response)
      setImgDisplay(response ? response.imgList[0] : '')
    })
  }, [])

  const onDisplayImage = (img) => {
    setImgDisplay(img)
  }

  return (
    <>
      <Box component="h1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
        Sobre nosotros
      </Box>
      {aboutUsInfo
        ? (
        <>
          <AboutUsText>{aboutUsInfo.aboutUsText}</AboutUsText>
          <h2>Galeria</h2>
          <Gallery>
            <DisplayImg src={imgDisplay.img}></DisplayImg>
            <ImageContainer>
              {aboutUsInfo.imgList.map((item, index) => (
                <GalleryPicture
                  key={index}
                  onClick={() => onDisplayImage(item)}
                  src={item.img}
                />
              ))}
            </ImageContainer>
          </Gallery>
        </>
          )
        : (
        <LoaderSpinner />
          )}
    </>
  )
}

export default AboutUs
