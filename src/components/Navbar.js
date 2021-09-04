import React, { useState } from 'react'
import RocketLogo from '../img/undraw_rocket.svg'
import data from '../data'
import {BrowserRouter,NavLink} from 'react-router-dom'

function Navbar() {
  const [inpdata, setData] = useState(data)
  return (
    <>
      <ul
        className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        <a
          className='sidebar-brand d-flex align-items-center justify-content-center'
          href='index.html'
        >
          <div className='sidebar-brand-icon rotate-n-15'>
            <i className='fas fa-laugh-wink'></i>
          </div>
          <div className='sidebar-brand-text mx-3'>
            <BrowserRouter forceRefresh={true}>
            <NavLink className='nav-link' to='/'>
            <span style={{color : 'white'}}>SB Admin <sup>2</sup></span>
            </NavLink>
            </BrowserRouter>
          </div>
        </a>
        <hr className='sidebar-divider my-0' />
        <BrowserRouter forceRefresh={true}>
          <li className='nav-item active'>
            <NavLink className='nav-link' to='/'>
              Dashboard
            </NavLink>
          </li>
        </BrowserRouter>
        <hr className='sidebar-divider' />
        {inpdata[0].Navdivisions.map((item) => {
          return (
            <>
              <div className='sidebar-heading'>{item.title}</div>
              {item.topics.map((topic) => {
                return (
                  <>
                    <BrowserRouter forceRefresh={true}>
                      <li className='nav-item'>
                        <NavLink
                          className='nav-link collapsed'
                          href='#'
                          data-toggle='collapse'
                          data-target='#collapseTwo'
                          aria-expanded='true'
                          aria-controls='collapseTwo'
                          to={topic.link}
                        >
                          <i className='fas fa-fw fa-cog'></i>
                          <span>{topic.name}</span>
                        </NavLink>
                      </li>
                    </BrowserRouter>
                  </>
                )
              })}
            </>
          )
        })}
        <hr
          className='sidebar-divider d-none 
d-md-block'
        />
        <div
          className='sidebar-card d-none 
d-lg-flex'
        >
          <img
            className='sidebar-card-illustration mb-2'
            src={RocketLogo}
            alt='...'
          />
          <p className='text-center mb-2'>
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className='btn btn-success btn-sm'
            href='https://startbootstrap.com/theme/
sb-admin-pro'
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </>
  )
}

export default Navbar
