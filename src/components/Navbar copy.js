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
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr className='sidebar-divider my-0' />




        
        <li className='nav-item active'>
          <a className='nav-link' href='index.html'>
            <i className='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard</span>
          </a>
        </li>
        <hr className='sidebar-divider' />
        {inpdata[0].Navdivisions.map((item) => {
          return (
            <>
              <div className='sidebar-heading'>{item.title}</div>
              {item.topics.map((subtopic) => {
                return (
                  <>
                    <li className='nav-item'>
                      <a
                        className='nav-link collapsed'
                        href='#'
                        data-toggle='collapse'
                        data-target='#collapseTwo'
                        aria-expanded='true'
                        aria-controls='collapseTwo'
                      >
                        <i className='fas fa-fw fa-cog'></i>
                        <span>{subtopic.name}</span>
                      </a>
                    </li>
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
