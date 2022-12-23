import React, { useEffect, useState } from 'react'
import p from '../styles/pog.module.css'
import ph from '../data/data.json'
import Image from 'next/image'
import Link from 'next/link'

function Product() {
  const [name,setName] = useState()
  const [data,setData] = useState(ph)
 
 

  const onChange = (e)=>{
    let a = data.filter((m)=>m.name.toUpperCase().includes(e.target.value.toUpperCase()))
    if(a === []){
      setData(ph)
    }else{
      setData(a)
    } 
    console.log(a)
    if(e.target.value === ""){
      setData(ph)
    }
   
      

  }
  console.log(data)
  return (
    <div className='container'>
      <div className={p.search}>
        <form className={p.Form}>
          <input onChange={onChange} className={p.input} type="text" placeholder="search" />
          <button id={p.button} type="reset"><i id={p.i} className="fas fa-search"></i></button>
        </form>
      </div>
      <div className='row'>
        <div  className='col-12'>
          <div id={p.row} >

            <div id={p.col10}>
              <div id={p.cont} className='container  '>

                <div id={p.g}  className='row '>

                  {data.map((m) => (
                    <div key={m.id} id={p.col3} className='col-lg-3'>
                      <Link href={"/pog/" + m.id}>

                        <Image
                        
                          src={m.img}
                          width={300}
                          height={300}
                          alt="img"
                        />
                        <div className={p.cardFooter}>
                          <p>{m.name}</p>
                          <div className={p.icons}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <i className="fa-regular fa-star"></i>
                          </div>
                          <h3>{m.price}$</h3>

                        </div>


                      </Link>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Product
