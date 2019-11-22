import styled from 'styled-components'

const Navbar = styled.nav`
  background-color: #ffffff;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 10%;
`

const NavItem = styled.ul`
  display: inline-flex;

  & li {
    display: flex;
    height: 100%;
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }

    & a {
      border-top: solid 4px transparent;
      color: #071eb3;
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.3px;
      padding: 20px 5px;
      text-decoration: none;
    }

    & a.active {
      border-top: solid 4px #071eb3;
    }
  }
`

const Brand = styled.div`
  align-items: center;
  display: flex;

  & a {
    padding: 20px 5px;
  }
`

export {
  Navbar,
  NavItem,
  Brand
}
