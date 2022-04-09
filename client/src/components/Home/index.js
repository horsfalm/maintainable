import React from 'react';


export default function Home() {
  return (
   

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height:"600px" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Maintainable</h1>
              <h5 className='mb-4'> Welcome</h5>
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='loginemployee'
                role='button'
                rel='nofollow'
                target='_blank'
              >
                Employee Logan
              </a>
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='logintech'
                target='_blank'
                role='button'
              >
                Technician Logan
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}