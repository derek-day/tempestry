import React from 'react';

import Logo from './Logo';

const Tapehero = () => (
  <div className='tapehero'>
    {/* <div>
        <h1 style={{marginLeft:"4rem", marginTop:"5rem"}}>UNVEILING THE MYSTERIES OF MARS</h1>
        <p className='mt-5'>Test</p>
        <button className='mt-5' style={{marginBottom:"5rem"}}>Read More</button>
    </div> */}

        <div className='intro' style={{maxWidth:"30%", marginLeft:"4rem", marginTop:"20rem"}}>
          <h5 className='mb-4'><u>The Cupbearer</u></h5>
          <h1>UNVEILING THE MYSTERIES OF MARS</h1>
          <p className='mt-4'>Test</p>
          <button className='mt-4' style={{marginBottom:"12rem"}}>Read More</button>
        </div>

  </div>
  // <div className="hero my-5 text-center" data-testid="hero">
  //   <Logo testId="hero-logo" />
  //   <h1 className="mb-4" data-testid="hero-title">
  //     Tempestry
  //   </h1>

  //   <p className="lead" data-testid="hero-lead">
  //     This is a sample application that demonstrates an authentication flow for a Regular Web App, using{' '}
  //     <a href="https://nextjs.org">Next.js</a>
  //   </p>
  // </div>
);

export default Tapehero;
