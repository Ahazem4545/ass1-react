import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid footer-bg p-0 pt-5 ' >
      <div className="container m-auto pt-5 pb-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h4>LOCATION</h4>
            <p className='footer-font'>2215 John Daniel Drive</p>
            <p className='footer-font'>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center">
            <h4>AROUND THE WEB</h4>
            <div className='d-flex justify-content-center align-content-center'>
              <div className='border border-1 border-white rounded-pill d-flex justify-content-center align-items-center icon-width m-2'><i _ngcontent-qsm-c21="" className="fa-brands fa-facebook mx-1 icon"></i></div>
            <div className='border border-1 border-white rounded-pill d-flex justify-content-center align-items-center icon-width m-2'><i _ngcontent-qsm-c21="" className="fa-brands fa-twitter mx-1 icon"></i></div>
            <div className='border border-1 border-white rounded-pill d-flex justify-content-center align-items-center icon-width m-2'><i _ngcontent-qsm-c21="" className="fa-brands fa-linkedin-in mx-1 icon"></i></div>
            <div className='border border-1 border-white rounded-pill d-flex justify-content-center align-items-center icon-width m-2'><i _ngcontent-qsm-c21="" className="fa-solid fa-globe mx-1 icon"></i></div>
            </div>
            
            
          </div>
          <div className="col-md-4 text-center">
            <h4>ABOUT FREELANCER</h4>
            <p className='footer-font'>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
           
          </div>
        </div>
      </div>
       <div className='foot-end d-flex justify-content-center align-items-center'>
          <p className='my-2 py-2'>Copyright © Your Website 2021</p>
        </div>
    </div>
  )
}
