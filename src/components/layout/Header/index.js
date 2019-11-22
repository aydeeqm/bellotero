import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import Logo from '../../logo'
import { Navbar, NavItem, Brand } from './styles'

function useMenuData () {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getMenu = async () => {
      let response = await window.fetch('https://express-now.aydeeqm.now.sh/menu')
      response = await response.json()
      setMenu(response.menu.items)
      setLoading(false)
    }
    getMenu()
  }, [])
  return { menu, loading }
}

const BlockLoading = () => <p>Loading...</p>

export const Header = () => {
  const { menu, loading } = useMenuData()

  const renderOptions = option =>
    <li key={option.text}>
      <Link
        to={option.route}
        getProps={({ isCurrent }) => {
          return {
            style: {
              borderTop: isCurrent
                ? 'solid 4px #071eb3'
                : 'transparent'
            }
          }
        }}
      >
        {option.text}
      </Link>
    </li>

  return (
    <Navbar>
      <Brand>
        <Link to='/'>
          <Logo />
        </Link>
      </Brand>
      <NavItem>
        {
          loading
            ? <BlockLoading />
            : menu.map(renderOptions)
        }
      </NavItem>
    </Navbar>
  )
}
