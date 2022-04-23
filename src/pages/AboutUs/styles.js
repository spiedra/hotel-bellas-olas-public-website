import styled from '@emotion/styled'

export const Gallery = styled.div`
  display: grid;
  width: 90%;
  margin: auto;
  gap: 10px;
  grid-template-columns: repeat(2,40%);
  grid-template-Rows: 2;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1,1fr);
  }
  `

export const GalleryPicture = styled.img(props => ({
  display: 'relative',
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  ':hover': { cursor: 'pointer' }
}))

export const ImageContainer = styled.div(props => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,100px)',
  gap: '10px',
  margin: '0'
}))

export const DisplayImg = styled.img(props => ({
  width: '400px',
  height: '400px',
  objectFit: 'center',
  border: '1px solid black'
}))
