import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CoinInfo = () => {
  const { id } = useParams()
  const [currentCoin, setCurrentCoin] = useState([])

  useEffect(() => {
    const getIcon = async () => {}
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
      {currentCoin.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <h1>{currentCoin.data[0].name}</h1>
      )}
    </div>
  )
}

export default CoinInfo
