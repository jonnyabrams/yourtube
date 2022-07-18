import styled from "styled-components"
import YourTubeLogo from '../img/logo.png'
import HomeIcon from "@mui/icons-material/Home"
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined"
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined"
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined"
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined"
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined"
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined"
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined"
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined"

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 14px;
`

const Wrapper = styled.div`
  padding: 18px 26px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`

const Img = styled.img`
  height: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={YourTubeLogo} />
          MeTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item>
          <SettingsBrightnessOutlinedIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu