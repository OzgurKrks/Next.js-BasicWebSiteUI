import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { Context } from '../../context/Context'
import { useContext } from 'react'
import data from '../../data/data.json'
import Image from 'next/image'
import singleCss from '../../styles/single.module.css'

function SingleProduct() {
  const router = useRouter()
  const cartData = useContext(Context)
  const [selectValue,setSelectValue] = useState(0)
  const filterSingleProduct = data.filter((m) => m.id == router.query.id)


  const onClick = () => {
    const checkCart = cartData.cart.find((m) => m.id === filterSingleProduct[0].id)
    //console.log(checkCart)
    if (!checkCart) {
      cartData.setCart([...cartData.cart, filterSingleProduct[0]])
    }
    cartData.setTotal(Number(filterSingleProduct[0].price * filterSingleProduct[0].count) + Number(cartData.total))
    const select = document.getElementsByClassName("form-select")
    if (filterSingleProduct[0].count === 1) {
      filterSingleProduct[0].count += parseInt(select[0].value) - 1
    } else {
      filterSingleProduct[0].count += parseInt(select[0].value)
    }
    setSelectValue(select[0].value)
    cartData.setTotal(Number(filterSingleProduct[0].price * filterSingleProduct[0].count) + Number(cartData.total))

  }
 

  const addCart = (e) => {



  }

  console.log(selectValue)
  return (
    
      <div className='container' >
      <div className='row '>
      {filterSingleProduct.map((m)=>(
          <>
            <div id={singleCss.col8} className='col-lg-6'>

<Image
  className={singleCss.img}
  src={m.img}
  width={400}
  height={400}
  alt={m.name}
/>
</div>
<div id={singleCss.col4} className='col-lg-6'>
<div>
  <h1>{m.name}</h1>
  <p>Whereas disregard and contempt for human rights have resulted</p>
  <h4>{m.price} $</h4>

  <div className={singleCss.icons}>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    <i class="fa-regular fa-star"></i>
  </div>

  <select id={singleCss.select} onChange={addCart} class="form-select" aria-label="Default select example">

    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
  </select>
  

  <button onClick={onClick} id={singleCss.addCart} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <h2>Add Cart</h2>
  </button>


  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
        <i id={singleCss.icon} class="fa-sharp fa-solid fa-circle-check"></i><span className={singleCss.span}>Product added to cart successfully...</span>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div className='row'>
            <div className='col-lg-4'>
              <Image
                className={singleCss.Modalimg}
                src={m.img}
                width={400}
                height={400}
                alt={m.name}
              />
            </div>
            <div id={singleCss.col7} className='col-lg-7'>
          <h1> {selectValue} x {m.name}</h1>:<h1></h1>
              <div className={singleCss.iconss}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <div id={singleCss.footer} class="modal-footer">
          <h5> {selectValue} x {m.price}$</h5>
        </div>
      </div>
    </div>
  </div>

</div>
</div>
          </>
            ))}
      </div>
    </div>

  )
}

export default SingleProduct