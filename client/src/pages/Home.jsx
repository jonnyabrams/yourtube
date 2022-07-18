import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Card from "../components/Card"
import axios from 'axios'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Home = ({ type }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`)
      setVideos(res.data)
    }
    fetchVideos()
  }, [type])

  return (
    <Link to='/video/test' style={{ textDecoration: 'none' }}>
      <Container>
        {videos.map((video) => (
            <Card />
        ))}
      </Container>
    </Link>
  )
}

export default Home