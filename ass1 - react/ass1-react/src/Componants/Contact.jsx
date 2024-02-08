import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className='my-5 bg-white container-fluid d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row portfolio-color">
          <div className='text-center'>
            <h2 className='fa-star-2 position-relative fw-bold line-blue'>CONATCT SECTION</h2>
            <i _ngcontent-qsm-c6="" className="fa-solid fa-star "></i>
            </div>
            
        </div>
        <div className="row mt-5">
          <div className="col-md-12 w-50 m-auto">
            <input type="text" placeholder='UserName' className='form-control border border-1 border-top-0 border-end-0 border-start-0'/>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 w-50 m-auto">
            <input type="text" placeholder='UserAge' className='form-control border border-1 border-top-0 border-end-0 border-start-0'/>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 w-50 m-auto">
            <input type="text" placeholder='UserEmail' className='form-control border border-1 border-top-0 border-end-0 border-start-0'/>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 w-50 m-auto">
            <input type="text" placeholder='UserPassword' className='form-control border border-1 border-top-0 border-end-0 border-start-0'/>
            <button className='btn mt-4 text-white'>Send Message</button>
          </div>
        </div>
        

      </div>
      
    </div>
    </div>
  )
}
