import * as S from './styles'

import containerImage from '../../assets/container.png'

function LoadingScreen() {
  return (
    <>
      <S.Wrapper>
        <img src={containerImage} />
        <h2>loading containers</h2>
      </S.Wrapper>
    </>
  )
}

export default LoadingScreen
