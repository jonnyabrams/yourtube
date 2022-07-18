import { Link } from "react-router-dom"
import styled from "styled-components"
import Card from "../components/Card"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Home = () => {
  return (
    <Link to='/video/test' style={{ textDecoration: 'none' }}>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Link>
  )
}

export default Home