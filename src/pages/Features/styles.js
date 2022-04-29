import styled from '@emotion/styled'

export const FeatureConstainer = styled.div`
  width: 90%;
  height:max-content;
  text-align: center;
  @media (max-width: 768px) {
    margin:auto;
  }
  `
export const FeatureItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:20px;
  border-radius: 5px;
  background: #DCE7F3;
  padding: 10px;
  &:hover{
      filter: brightness(90%);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `
export const FeatureImage = styled.img`
  width:400px;
  border-radius: 5px;
  max-width: 400px;
  height: 200px;
  display: flex;
  object-fit: conver;
  @media (max-width: 768px) {
    width:250px;
  }
  `

export const FeatureDescription = styled.div`
margin-left:10px;
@media (max-width: 768px) {
    font-size: 1.2em;
    text-align: start;
    max-width:200px;
    margin-top:10px
  }
  `
