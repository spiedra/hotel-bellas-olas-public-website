import React, { useEffect, useState } from 'react'
import { Gallery, GalleryPicture, DisplayImg, ImageContainer } from './styles'
import { getAboutUsInfo } from '../../services/Gets/getAboutUsInfo'
import { LoaderSpinner } from '../../components/Loader'

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
      <h1>Sobre nosotros</h1>
      <p>
        {aboutUsInfo
          ? aboutUsInfo.aboutUsText
          : 'texto sobre nosotros texto sobre nosotros texto sobre nosotros texto sobre nosotros texto sobre nosotros texto sobre nosotros'}
      </p>
      {aboutUsInfo
        ? (
        <Gallery>
          <DisplayImg src={imgDisplay}></DisplayImg>
          <ImageContainer>
            {aboutUsInfo.imgList.map((img, index) => (
              <GalleryPicture
                key={index}
                onClick={() => onDisplayImage(img)}
                src={img}
              />
            ))}
          </ImageContainer>
        </Gallery>
          )
        : (
        <LoaderSpinner />
          )}
    </>
  )
}

export default AboutUs
