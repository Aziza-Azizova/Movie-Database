import logo from '@i/header/Logo.svg'
import menuIcon from '@i/header/menu.svg'
import { router } from '../router'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className={`header ${menu ? 'active': ''}`}>
      <div className="container">
        <div className="header__nav">
          <a href="" className='header__logo'><img src={logo} alt="logo" /></a>
          <ul className={`header__list ${menu ? 'active': ''}`}>
            {
              router.map((route, index) => (
                <li key={index}>
                  <NavLink to={route.path} className="header__link">
                    {route.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="header__menu" onClick={() => setMenu(!menu)}>
          <img src={menuIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header