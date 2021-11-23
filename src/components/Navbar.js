import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  position: relative;
  z-index: 10;
  background-color: white;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0;
  padding-left: 10rem;
  padding-right: 10rem;
  position: sticky;
  top: 0;
`

const Menu = styled.ul`
  font-weight: 500;
  list-style: none;
  display: flex;
  align-items: center;
`

const Logo = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`

const Item = styled.li`
  font-size: 1.5rem;
  margin-left: ${({ margin }) => `${margin}rem`};
  color: black;
  text-decoration: none;

  &:hover {
    color: #3861fb;
    cursor: pointer;
    text-decoration: underline;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Logo>Crypto World</Logo>
      <Menu>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Item>Cryptocurrencies</Item>
        </Link>
      </Menu>
    </Nav>
  )
}

export default Navbar
