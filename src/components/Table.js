import { useContext, useEffect, useState } from 'react'
import { CryptoData } from '../App'
import styled from 'styled-components'
import millify from 'millify'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CoinTable = styled.table`
  padding: 1rem;
  transform: translateY(-8rem);
  background-color: white;
  border-radius: 1rem;
  margin: 0 auto;
  width: 60%;
  box-shadow: 0 0 0.5rem rgb(0, 0, 0, 0.3);
  border-spacing: 0;

  a {
    text-decoration: none;
    font-size: inherit;
    color: inherit;
    &:hover {
      transform: scale(2);
    }
  }

  tr {
    text-align: left;
    :last-child {
      td {
        border-bottom: 0;
      }
    }
    :hover {
      background-color: rgb(106, 222, 165, 0.2);
    }
  }

  th {
    font-size: 3rem;

    :last-child {
      text-align: right;
    }
  }

  td {
    font-size: 1.5rem;
  }

  th:hover {
    cursor: pointer;
  }

  th,
  td {
    margin: 0;
    padding: 1.3rem 0.5rem;
    border-bottom: 2px solid rgb(128, 159, 237, 0.2);
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

const Table = ({ coinTest }) => {
  const [displayed, setDisplayed] = useState([])
  const [isNormalList, setIsNormalList] = useState(true)
  const [isAlphabeticalList, setIsAlphabeticalList] = useState(false)
  const { coins } = useContext(CryptoData)

  const SortAlphabetical = (x, y) => {
    if (x.name < y.name) {
      return -1
    }

    if (x.name > y.name) {
      return 1
    }
    return 0
  }
  const normalList = [...coins]
  const alphabetList = [...coins].sort(SortAlphabetical)

  return (
    <div className='container'>
      {!coins && <h1>LOADING...</h1>}
      {displayed && (
        <CoinTable>
          <thead>
            <tr>
              <th>#</th>
              <th
                onClick={() => {
                  if (isNormalList === true) {
                    setIsNormalList(false)
                    setIsAlphabeticalList(true)
                  } else {
                    setIsNormalList(true)
                    setIsAlphabeticalList(false)
                  }
                }}
              >
                Coin
              </th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>24hr</th>
            </tr>
          </thead>
          <tbody>
            {isNormalList &&
              normalList.map((coin) => (
                <tr key={coin.id}>
                  <td>{coin.rank}</td>
                  <td>
                    <Link to={`/coin/${coin.id}`}>
                      {coin.name} ({coin.symbol})
                    </Link>
                  </td>
                  <td>${millify(coin.price_usd, { precision: 10 })}</td>
                  <td>${millify(coin.market_cap_usd, { precision: 2 })}</td>
                  <td className={coin.percent_change_24h > 0 ? 'green' : 'red'}>
                    {coin.percent_change_24h}%
                    {coin.percent_change_24h > 0 ? '▲' : '▼'}
                  </td>
                </tr>
              ))}
            {isAlphabeticalList &&
              alphabetList.map((coin) => (
                <tr key={coin.id}>
                  <td>{coin.rank}</td>
                  <td>
                    <Link to={`/coin/${coin.id}`}>
                      {coin.name} ({coin.symbol})
                    </Link>
                  </td>
                  <td>${millify(coin.price_usd, { precision: 10 })}</td>
                  <td>${millify(coin.market_cap_usd, { precision: 2 })}</td>
                  <td className={coin.percent_change_24h > 0 ? 'green' : 'red'}>
                    {coin.percent_change_24h}%
                    {coin.percent_change_24h > 0 ? '▲' : '▼'}
                  </td>
                </tr>
              ))}
          </tbody>
        </CoinTable>
      )}
    </div>
  )
}

export default Table
