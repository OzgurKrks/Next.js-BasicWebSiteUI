import React from 'react'
import Image from 'next/image'
import css from '../styles/caroselle.module.css'
import Link from 'next/link'
function Carousel() {
  return (
    <div id={css.container} className='container'>
       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div id={css.inner} className="carousel-inner">
        
        <div  className="carousel-item active">
        <Link href="/pro">
            <Image id={css.img} className="d-block w-100" width={900} height={460} alt="supp" src="/suppp.jpg"></Image>
            <div className="carousel-caption d-none d-md-block">
              <h5>Shopping</h5>
              <p>good nutrition good training</p>
            </div>
            </Link>
          </div>
     
    
       <div id={css.carousel3} className="carousel-item">
       <Link href="/read2">
            <Image id={css.img} className="d-block w-100" width={900} height={460} alt="training" src="/calis.jpg"></Image>
            <div className="carousel-caption d-none d-md-block">
              <h5>ARTICLES</h5>
              <p>some useful articles</p>
            </div>
            </Link>
          </div>
    
      
        <div id={css.xd} className="carousel-item ">
        <Link href="/builtRead">
         <Image id={css.img} className="d-block w-100" width={900} height={460} alt="training" src="/tr.jpg"></Image>
     
         <div className="carousel-caption d-none d-md-block">
           <h5>Training</h5>
           <p>The better your training program is, the better you are!</p>
         </div>
         </Link>
       </div>
       
        
       
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
     
  )
}

export default Carousel