import React, { useEffect, useState } from 'react'
import Nav from '../styles/Navbar.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
  const [countt, setCountt] = useState(1)
  const data = useContext(Context)
  
  const Plus = (e) => {
    const Find = data.cart.find((m) => m.id === parseInt(e.target.value))
    
    Find.count += Number(1)
   
    setCountt(countt + 1)
    data.setTotal(data.total + parseInt( e.target.name))
  

  }
  const Minus = (e) => {
    const Find = data.cart.find((m) => m.id === parseInt(e.target.value))
    
    Find.count -= Number(1)
    if(Find.count < Number(1)){
      Find.count = 1
      data.setTotal(data.total - parseInt(0))
      
    }else{
      setCountt(countt - 1)
      data.setTotal(data.total - parseInt(e.target.name))
    }
 }
 const Remove = (e)=>{
  const Find = data.cart.find((m) => m.id === parseInt(e.target.value))
      data.setCart(data.cart.filter((m)=>m.id !== Number(e.target.value)))
      data.setTotal(data.total - (e.target.name * e.target.id))
      Find.count = 1
      setCountt(countt - 1)
 }
 

 



  return (
    <nav id={Nav.nav} className="navbar navbar-expand-lg navbar-light  bg-light ">
      <div id={Nav.container} className="container-fluid">
       <Link href="/"> <i id={Nav.icon1} className="fa-sharp fa-solid fa-dumbbell"></i></Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div id={Nav.links} className="navbar-nav ms-auto ">
          <Link href="/read1">
              <div className="nav-link">Articles</div>
            </Link>
            
            <Link href="/builtRead">
              <div className="nav-link">Coaching</div>
            </Link>
            <Link href="/pro">
              <div className="nav-link">Suplements</div>
              </Link>
           <div className={Nav.icon}>
           <a className="nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-cart-shopping"></i></a>
           {data.cart.length > 0 && <p>{data.cart.length}</p>}
           </div>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Shopping Cart</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div className={Nav.wrapper}>
                  {data.cart.map((m) => (
                    <div key={m.id} className='row'>
                      <div className='col-5'>
                        <Image

                          src={m.img}
                          width={100}
                          height={100}

                        />
                      </div>
                      <div id={Nav.col7} className='col-7'>
                        <p>{m.name}</p>
                          <div className={Nav.butons}>
                         <div>
                         <button name={m.price} value={m.id} onClick={Plus}>+</button>
                          <button name={m.price} value={m.id} onClick={Minus}>-</button>
                         </div>
                    
                          <div>
                          <button name={m.price} id={m.count} value={m.id} onClick={Remove} class="fa-solid fa-trash"></button>
                          </div>
                         
                          </div>
                        <h5>{m.count} x {m.price}$</h5>
                      </div>

                    </div>
                  ))}
                  <div className={Nav.footer}>
                    <div className={Nav.footerBody}>
                      <h6>Toplam tutar</h6>
                      <h6>{data.total} $</h6>
                    </div>
                    <button>Sepeti Onayla</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar