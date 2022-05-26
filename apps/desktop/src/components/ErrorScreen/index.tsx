import * as S from './styles'

import ovniImage from '../../assets/ovni.png'

function ErrorScreen() {
  return (
    <>
      <S.Wrapper>
        <img src={ovniImage} />
        <h2>there was an error loading the containers</h2>
      </S.Wrapper>
    </>
  )
}

export default ErrorScreen
