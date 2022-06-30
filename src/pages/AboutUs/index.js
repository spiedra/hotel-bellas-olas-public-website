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
      setImgDisplay(response ? response.imgList[0].img : '')
    })
  }, [])

  const onDisplayImage = (img) => {
    setImgDisplay(img)
  }

  return (
    <Box sx={{ mt: '3rem', ml: '1.5rem' }}>
      <h1>Sobre nosotros</h1>
      <AboutUsText>
        {aboutUsInfo
          ? aboutUsInfo.aboutUsText
          : 'texto sobre nosotros texto sobre nosotros texto sobre nosotros texto sobre nosotros texto sobre nosotros texto sobre nosotros'}
      </AboutUsText>
      <h2>Galeria</h2>
      {aboutUsInfo
        ? (
        <Gallery>
          <DisplayImg src={imgDisplay}></DisplayImg>
          <ImageContainer>
            {aboutUsInfo.imgList.map((img, index) => (
              <GalleryPicture
                key={index}
                onClick={() => onDisplayImage(img.img)}
                src={img.img}
              />
            ))}
          </ImageContainer>
        </Gallery>
          )
        : (
        <LoaderSpinner />
          )}
    </Box>
  )
}

export default AboutUs
