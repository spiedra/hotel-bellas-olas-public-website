import styled from '@emotion/styled'

export const Gallery = styled.div`
  display: grid;
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const AboutUsText = styled.p`
  line-height: 28px;
  font-size: 17px;
  width: 90%;
  text-align: justify;
`

export const GalleryPicture = styled.img((props) => ({
  width: '250px',
  height: '200px',
  objectFit: 'cover',
  marginBottom: '15px',
  marginRight: '15px',
  ':hover': { cursor: 'pointer' }
}))

export const ImageContainer = styled.div((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '1rem'
}))

export const DisplayImg = styled.img((props) => ({
  maxWidth: '80%',
  width: '50%',
  height: '400px',
  objectFit: 'cover'
}))
