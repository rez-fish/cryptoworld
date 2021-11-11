import styled from 'styled-components'
import money from '../img/money.png'
import Table from '../components/Table'
import { CryptoData } from '../App'
import { useContext } from 'react'

const Main = styled.div`
  padding: 10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  background-color: #6adea5;
  overflow: hidden;
  padding-left: 10rem;
  padding-right: 10rem;
`

const TitleContainer = styled.div`
  width: 60%;
`

const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 2rem;
`

const Message = styled.p`
  font-size: 3rem;
`
const Message2 = styled.p`
  font-size: 1.8rem;
`

const ImageContainer = styled.div`
  border-radius: 50%;
`

const Cryptocurrencies = () => {
  const { coins } = useContext(CryptoData)
  return (
    <>
      <Main>
        <TitleContainer>
          <Title>Fill your bag, with the coins worth grabbing.</Title>
          <Message>Find their worth in Crypto World.</Message>
          <Message2>Save time. View the top 100 coins!</Message2>
        </TitleContainer>
        <ImageContainer>
          <img src={money} alt='' />
        </ImageContainer>
      </Main>
      <Table coinTest={coins} />
    </>
  )
}

export default Cryptocurrencies
