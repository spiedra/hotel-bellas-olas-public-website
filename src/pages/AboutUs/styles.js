import styled from '@emotion/styled'

export const Gallery = styled.div`
  display: grid;
  width: 90%;
  display:flex;
  @media (max-width: 768px) {
    flex-direction:column;
  }
  `

export const AboutUsText = styled.p`
@media (max-width: 768px) {
  font-size: 15px;
  max-width: 70vw;
}
  `

export const GalleryPicture = styled.img(props => ({
  width: '200px',
  height: '150px',
  objectFit: 'cover',
  margin: '10px',
  ':hover': { cursor: 'pointer' }
}))

export const ImageContainer = styled.div(props => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '10px'
}))

export const DisplayImg = styled.img(props => ({
  maxWidth: '80%',
  width: '50%',
  height: '400px',
  objectFit: 'cover',
  border: '1px solid black'
}))
