import React from 'react'
import index from '../styles/in.module.css'
import Link from 'next/link'
import Image from 'next/image'
function Reading() {
  return (
    <>
      <div className={index.read}>
        <h1>Read Up / Power Up</h1>
      </div>


      <div className='row '>
        <div className='col-lg-4'>
        <div  className='row'> 
        <Image className='col-12' src="/traning.jpg" width={510} height={400}/>
        </div>
          <div className={index.comment}>
            <p className={index.p}>December 12, 2022</p>
            <h3 className={index.h3}>Training for Power Do I Need it and How Should I Add it to My Routine?</h3>
            <div className={index.pWrapper}>
              <p className={index.LastP}>Whether youre training for a race, an intramural league, or simply because you like to, improving muscular power can be a great.</p>
            </div>
            <Link href="/read1">
            <p id={index.ReadMore}>Read More</p>
            </Link>
          </div>
        </div>
        <div className='col-lg-4'>
        <div  className='row'> 
        <Image className='col-12' src="/calis.jpg" width={510} height={400}/>
        </div>
          <div className={index.comment}>
            <p className={index.p}>December 12, 2022</p>
            <h3 className={index.h3}>No Weights, No Problem 5 Calisthenics Exercises When First Starting Out</h3>
            <div className={index.pWrapper}>
              <p className={index.LastP}>Master the art of movement with just your body.</p>
            </div>
            <Link href="/read2">
            <p id={index.ReadMore}>Read More</p>
            </Link>
          </div>
        </div>
        <div className='col-lg-4'>
        <div  className='row'> 
        <Image className='col-12' src="/workout.jpg" width={510} height={400}/>
        </div>
          <div className={index.comment}>
            <p className={index.p}>December 12, 2022</p>
            <h3 className={index.h3}>Training for Power Do I Need it and How Should I Add it to My Routine?</h3>
            <div className={index.pWrapper}>
              <p className={index.LastP}>Whether youre training for a race or simply because you like to, improving muscular power can be a great addition to your workout.</p>
            </div>
            <Link href="/read3">
            <p id={index.ReadMore}>Read More</p>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Reading