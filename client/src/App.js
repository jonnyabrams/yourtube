import styled, { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { darkTheme, lightTheme } from './utils/Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Login from './pages/Login'

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg}
`

const Wrapper = styled.div`
  padding: 22px 96px;
`

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/video/:id' element={<Video />} />    
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
