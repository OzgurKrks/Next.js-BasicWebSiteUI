import React from 'react'
import css from '../styles/footer.module.css'
import Link from "next/link"
import Image from 'next/image'
function Footer() {
  return (
    <div className='container' id={css.container}>
      <div className='container'>
        <div className='row'>
          <div id={css.col4} className='col-sm-4'>
            <div id={css.colFirst} >
              <h4>This Web Site</h4>
              <p>
                Lose weight, gain weight, build muscle and burn fat. They pass through the way of nutrition in the environments they live in. You can find nutrition, training and nutrition articles on this web site in terms of your need for a good result.</p>
            </div>
          </div>
          <div id={css.col4} className='col-sm-4'>

            <div>
              <h5>Fast Connection</h5>
              <ul>
                <Link href="read1">
                  <li>articles</li>
                </Link>
                <Link href="builtRead">
                <li>coaching</li>
                </Link>
              <Link href="pog">
              <li>supplements</li>
              </Link>
              </ul>
            </div>

          </div>
          <div id={css.col4} className='col-sm-4'>
            <div>
              <h5>Articles</h5>
              <ul>
                <Link href="read1">
                  <li>Training for Power</li>
                </Link>
                <Link href="read2">
                  <li>5 Calisthenics Exercises</li>
                </Link>
                <Link href="read3">
                  <li>Do I Need ?</li>
                </Link>
                <Link href="read4">
                  <li>Training for a race</li>
                </Link>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr id={css.hr} />
      <div id={css.footer} className='container'>
        <h6>© 2022 Ozgur Karakus</h6>
        <div className={css.icon}>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div>
          <Image width={50} height={35} src="/visa.gif" />
          <Image width={50} height={35} src="/mastercard.gif" />
        </div>

      </div>
    </div>
  )
}

export default Footer