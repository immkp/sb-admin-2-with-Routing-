import React from 'react'
import {cardBody,bgGradient,bgGray} from '../routingcolors'

function ColorsPage() {
 return (
   <>
     <div id='content-wrapper' class='d-flex flex-column'>
       {/* <!-- Main Content --> */}
       <div id='content'>
         {/* <!-- Begin Page Content --> */}
         <div class='container-fluid'>
           {/* <!-- Page Heading --> */}
           <h1 class='h3 mb-1 text-gray-800' style={{ marginTop: '20px' }}>
             Color Utilities
           </h1>
           <p class='mb-4'>
             Bootstrap's default utility classes can be found on the official{' '}
             <a href='https://getbootstrap.com/docs'>Bootstrap Documentation</a>{' '}
             page. The custom utilities below were created to extend this theme
             past the default utility classes built into Bootstrap's framework.
           </p>

           {/* <!-- Content Row --> */}
           <div class='row'>
             {/* <!-- First Column --> */}
             <div class='col-lg-4'>
               {/* <!-- Custom Text Color Utilities --> */}
               <div class='card shadow mb-4'>
                 <div class='card-header py-3'>
                   <h6 class='m-0 font-weight-bold text-primary'>
                     Custom Text Color Utilities
                   </h6>
                 </div>
                 <div class='card-body'>
                   {cardBody.map((prop) => {
                     return <p class={`${prop} p-3 bg-dark m-0`}>.{prop}</p>
                   })}
                 </div>
               </div>

               <div class='card shadow mb-4'>
                 <div class='card-header py-3'>
                   <h6 class='m-0 font-weight-bold text-primary'>
                     Custom Font Size Utilities
                   </h6>
                 </div>
                 <div class='card-body'>
                   <p class='text-xs'>.text-xs</p>
                   <p class='text-lg mb-0'>.text-lg</p>
                 </div>
               </div>
             </div>

             <div class="col-lg-4">
               {/* <!-- Background Gradient Utilities --> */}
                 <div class="card shadow mb-4">
                   <div class="card-header py-3">
                     <h6 class="m-0 font-weight-bold text-primary">
                       Custom Background Gradient Utilities
                     </h6>
                   </div>

                   <div class="card-body">
                    {bgGradient.map((prop)=>{
                     return (
                       <div
                         class={`px-3 py-5 ${prop} text-white`}
                       >
                         .{prop}
                       </div>
                     )
                    })}
                   </div>
                 </div>
                 </div>

                 {/* <!-- Third Column --> */}
                   <div class="col-lg-4">
                     {/* <!-- Grayscale Utilities --> */}
                     <div class="card shadow mb-4">
                       <div class="card-header py-3">
                         <h6 class="m-0 font-weight-bold text-primary">
                           Custom Grayscale Background Utilities
                         </h6>
                       </div>
                       <div class="card-body">
                        {bgGray.map((prop)=>{
                         return (
                           <div class={`p-3 ${prop} text-white`}>
                             .{prop}
                           </div>
                         )
                        })}
                       </div>
                       </div>
                       </div>
           </div>
         </div>
       </div>
     </div>
   </>
 )
}

export default ColorsPage
