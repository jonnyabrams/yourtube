import styled from "styled-components"
import YourTubeLogo from '../img/logo.png'

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
`

const Wrapper = styled.div`
  padding: 18px 26px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const Img = styled.img`
  height: 25px;
`

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        items
        <Logo>
          <Img src={YourTubeLogo} />
          MeTube
        </Logo>
      </Wrapper>
    </Container>
  )
}

export default Menu