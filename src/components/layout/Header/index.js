import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import Logo from '../../logo'
import { BlockLoading } from '../../BlockLoading'
import './styles.scss'

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
                : 'solid 4px transparent'
            }
          }
        }}
      >
        {option.text}
      </Link>
    </li>

  return (
    <nav className='navbar'>
      <div className='brand'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <ul className='navbar__item'>
        {
          loading
            ? <BlockLoading />
            : menu.map(renderOptions)
        }
      </ul>
    </nav>
  )
}
