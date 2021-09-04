import React from 'react'
import {borderBottom,borderTop} from '../routingdata'

function Borders() {
 return (
  <>
    {/* <!-- Content Wrapper --> */}
  <div id='content-wrapper' class='d-flex flex-column'>
    {/* <!-- Main Content --> */}
    <div id='content'>
      {/* <!-- Begin Page Content --> */}
      <div class='container-fluid'>
        {/* <!-- Page Heading --> */}
        <h1 class='h3 mb-1 text-gray-800' style={{ marginTop: '20px' }}>
          Border Utilities
        </h1>
        <p class='mb-4'>
          Bootstrap's default utility classes can be found on the official{' '}
          <a href='https://getbootstrap.com/docs'>
            Bootstrap Documentation
          </a>{' '}
          page. The custom utilities below were created to extend this
          theme past the default utility classes built into Bootstrap's
          framework.
        </p>
        <div class='row'>
        <div class='col-lg-6'>

         {borderTop.map((prop)=>{
          return (
            <div
              className={`card mb-4 py-3 ${prop}`}
            >
              <div className='card-body'>. {prop}</div>
            </div>
           )
           })}
        </div>
        <div class='col-lg-6'>
         {borderBottom.map((prop)=>{
          return (
            <div
              class= {`card mb-4 py-3 ${prop}`}
            >
              <div class='card-body'>. {prop}</div>
            </div>
          )
         })}
        </div>

        </div>


        </div>
        </div>
        </div>
   
  </>
 )
}

export default Borders
