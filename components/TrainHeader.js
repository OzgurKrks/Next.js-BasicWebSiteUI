import React from 'react'
import Image from 'next/image'
import css from '../styles/train.module.css'
function TrainHeader() {
  return (
    <div className='container'>
        <div className='row'>
            
            <div className='col-lg-6 mt-3'>
                <div className={css.header}>
                    <h1>Know Yourself to Build Yourself</h1>
                  
                </div>
                <div className={css.content}>
                        <h2>Your anatomy is the blueprint. You are the architect.</h2>
                        <h6>5 workouts per week  45 60 min. workouts</h6>
                        <p>The in depth training plan follows a five day split that is broken into two phases. Phase one helps you build muscle and connective tissue strength to prepare your body for the heavier work ahead. The second phase is focused on strength development. Your coaches Jen Jewell, Craig Capurso, and Mike Robertson, CSCS, will guide you from start to finish.</p>
                    </div>
            </div>
            <div  className='col-lg-6 mt-3'>
                <div className={css.image}></div>
            </div>

        </div>
    </div>
  )
}

export default TrainHeader