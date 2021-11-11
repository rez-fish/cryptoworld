import './App.css'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cryptocurrencies from './pages/Cryptocurrencies'
import Exchanges from './pages/Exchanges'
import axios from 'axios'
import CoinInfo from './pages/CoinInfo'

const Main = styled.div`
  background-color: #fcfbfe;
  height: 100%;
`
export const CryptoData = React.createContext()

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const getCoins = async () => {
      const data = await axios.get('https://api.coinlore.net/api/tickers/')
      setCoins(data.data.data)
    }
    getCoins()
  }, [])

  return (
    <Router>
      <CryptoData.Provider value={coins}>
        <Main>
          <Navbar />
          <Routes>
            <Route path='/' element={<Cryptocurrencies />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/coin/:id' element={<CoinInfo />} />
          </Routes>
        </Main>
      </CryptoData.Provider>
    </Router>
  )
}

export default App
