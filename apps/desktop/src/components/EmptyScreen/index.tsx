import * as S from './styles'

import boxImage from '../../assets/box.png'

function EmptyScreen() {
  return (
    <>
      <S.Wrapper>
        <img src={boxImage} />
        <h2>no containers found</h2>
      </S.Wrapper>
    </>
  )
}

export default EmptyScreen
