import './App.css'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cryptocurrencies from './pages/Cryptocurrencies'
import Exchanges from './pages/Exchanges'

const Main = styled.div`
  background-color: #fcfbfe;
  height: 100vh;
`

function App() {
  return (
    <Router>
      <Main>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cryptocurrencies />} />
          <Route path='/exchanges' element={<Exchanges />} />
        </Routes>
      </Main>
    </Router>
  )
}

export default App
