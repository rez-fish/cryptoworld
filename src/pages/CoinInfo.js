import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import millify from 'millify'

const CoinInfoPage = styled.div`
  margin-top: 10rem;
`

const Box = styled.div``

const MainInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 8rem;
    margin-right: 3rem;
  }
`

const Price = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  h1 {
    font-size: 2rem;
  }
`

const Rank = styled.div`
  display: flex;
  p {
    font-weight: bold;
    color: grey;
  }

  .red {
    color: #e63065;
    text-align: right;
  }
  .green {
    color: #6adea5;
    text-align: right;
  }
`

const CoinInfo = () => {
  const { id } = useParams()
  const [currentCoin, setCurrentCoin] = useState([])

  useEffect(() => {
    const getCoin = async () => {
      try {
        const coin = await axios.get(
          `https://api.coinlore.net/api/ticker/?id=${id}`
        )
        setCurrentCoin(coin)
      } catch (err) {
        if (axios.isCancel(err)) {
          return
        } else {
          throw err
        }
      }
    }
    getCoin()
  }, [id])

  return (
    <div>
      {console.log(currentCoin)}
      {currentCoin.length === 0 && <h1>Loading...</h1>}
      {currentCoin.length !== 0 && (
        <>
          <CoinInfoPage>
            <Box>
              <MainInfo className='container'>
                <img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${currentCoin.data[0].symbol.toLowerCase()}`}
                  alt=''
                />
                <Price>
                  <Rank>
                    <h1>{currentCoin.data[0].name}</h1>
                    <p>#{currentCoin.data[0].rank}</p>
                  </Rank>
                  <Rank>
                    <h1>
                      $
                      {millify(currentCoin.data[0].price_usd, {
                        precision: 10,
                      })}
                    </h1>
                    <p
                      className={
                        currentCoin.data[0].percent_change_24h > 0
                          ? 'green'
                          : 'red'
                      }
                    >
                      {currentCoin.data[0].percent_change_24h}
                      {currentCoin.data[0].percent_change_24h > 0 ? '▲' : '▼'}
                    </p>
                  </Rank>
                </Price>
              </MainInfo>
            </Box>
          </CoinInfoPage>
        </>
      )}
    </div>
  )
}

export default CoinInfo
