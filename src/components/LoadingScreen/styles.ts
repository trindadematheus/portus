import styled, { keyframes } from 'styled-components'

const float = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(6px);
  }
`

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 200px;
    animation: ${float} 2s linear infinite both alternate;
  }

  h2 {
    font-size: 18px;
    font-weight: normal;
    margin-top: 20px;
  }
`
