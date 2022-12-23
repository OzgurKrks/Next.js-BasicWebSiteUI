import React from 'react'
import shopCss from '../styles/Shop.module.css'
import Link from 'next/link'
function Shop() {
  return (
        <>
        <div id={shopCss.title} className='container'>
            <h1 className={shopCss.h1}>Shoping</h1>
        </div>
        <div id={shopCss.container} className='container'>
            <div className='row'>
                <div id={shopCss.col} className='col-lg-6'>
                    <div id={shopCss.Shop1} >
                       <Link href="/pro">
                       <button className={shopCss.btn}>Shop Now</button>
                       </Link>
                    </div>
                </div>
                <div id={shopCss.col} className='col-lg-6'>
                    <div id={shopCss.Shop2}>
                    <Link href="/pro">
                    <button  className={shopCss.btn}>Shop Now</button>
                    </Link>
                    </div>
                </div>
               
            </div>
        </div>
        </>
  )
}

export default Shop
