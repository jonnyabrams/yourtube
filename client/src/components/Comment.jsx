import styled from "styled-components"

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
` 

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`

const Text = styled.span`
  font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/ytc/AKedOLQOuaQIk0NJjjw5bbsv9v9CrDvNKRVjGii426be4Q=s176-c-k-c0x00ffffff-no-rj-mo' />
      <Details>
        <Name>
          Dwigt Rortugal <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut voluptates fugit nesciunt repellat nihil nam distinctio! Ipsum in recusandae et amet commodi, eaque ratione excepturi. Esse ad consequuntur mollitia?
        </Text>
      </Details>
    </Container>
  )
}

export default Comment