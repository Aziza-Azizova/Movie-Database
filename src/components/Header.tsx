import logo from '@i/header/Logo.svg'
import { router } from '../router'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

function Header() {
  const [active, setActive] = useState(0);

  return (
    <div className='header'>
      <div className="container">
        <div className="header__nav">
          <a href="" className='header_logo'><img src={logo} alt="logo" /></a>
          <ul className='header__list'>
            {
              router.map((route, index) => (
                <li key={index}>
                  <NavLink to={route.path} className="header__link" onClick={() => setActive(index)}>
                    {route.name}
                  </NavLink>
                </li>
              ))
            }
            <span className={`circle ${active === 0 ? 'active' : active === 1 ? 'move2' : active === 2 ? 'move3' : active === 3 ? 'move4' : ''}`}></span>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header