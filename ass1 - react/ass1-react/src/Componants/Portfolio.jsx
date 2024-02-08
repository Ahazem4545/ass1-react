import React from 'react'
import img1 from '../imgs/poert1.png'
import img2 from '../imgs/port2.png'
import img3 from '../imgs/port3.png'

export default function Portfolio() {
  return (
    <div className='my-5 bg-white  container-fluid d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row portfolio-color">
          <div className='text-center'>
            <h2 className='fa-star-2 position-relative fw-bold line-blue'>PORTFOLIO COMPONENT</h2>
            <i _ngcontent-qsm-c6="" className="fa-solid fa-star "></i>
            </div>
            
        <div className="row g-4"> 
        <div className="col-md-4 img-container overflow-hidden rounded position-relative">
            <img className='imgs rounded' src={img1} alt="" />
            <div className='icon-container-opacity overflow-hidden rounded  position-absolute top-0 d-flex justify-content-center align-items-center'><i _ngcontent-qsm-c19="" className=" fa-solid fa-plus fa-6x icon-plus"></i></div>
          </div>
          <div className="col-md-4 img-container overflow-hidden rounded position-relative">
            <img className='imgs rounded' src={img2} alt="" />
            <div className='icon-container-opacity overflow-hidden rounded  position-absolute top-0 d-flex justify-content-center align-items-center'><i _ngcontent-qsm-c19="" className=" fa-solid fa-plus fa-6x icon-plus"></i></div>
          </div>
          <div className="col-md-4 img-container overflow-hidden rounded position-relative">
            <img className='imgs rounded' src={img3} alt="" />
            <div className='icon-container-opacity overflow-hidden rounded  position-absolute top-0 d-flex justify-content-center align-items-center'><i _ngcontent-qsm-c19="" className=" fa-solid fa-plus fa-6x icon-plus"></i></div>
          </div>
          <div className="col-md-4 img-container overflow-hidden rounded position-relative">
            <img className='imgs rounded' src={img1} alt="" />
            <div className='icon-container-opacity overflow-hidden rounded  position-absolute top-0 d-flex justify-content-center align-items-center'><i _ngcontent-qsm-c19="" className=" fa-solid fa-plus fa-6x icon-plus"></i></div>
          </div>
          <div className="col-md-4 img-container overflow-hidden rounded position-relative">
            <img className='imgs rounded' src={img2} alt="" />
            <div className='icon-container-opacity overflow-hidden rounded  position-absolute top-0 d-flex justify-content-center align-items-center'><i _ngcontent-qsm-c19="" className=" fa-solid fa-plus fa-6x icon-plus"></i></div>
          </div>
          <div className="col-md-4 img-container overflow-hidden rounded position-relative">
            <img className='imgs rounded' src={img3} alt="" />
            <div className='icon-container-opacity overflow-hidden rounded  position-absolute top-0 d-flex justify-content-center align-items-center'><i _ngcontent-qsm-c19="" className=" fa-solid fa-plus fa-6x icon-plus"></i></div>
          </div>
          </div>
         
          
        </div>
      </div>
      
    </div>
  )
}
