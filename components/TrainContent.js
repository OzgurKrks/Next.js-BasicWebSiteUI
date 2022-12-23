import React from 'react'
import css from '../styles/traincontent.module.css'
function TrainContent() {
  return (
  <div className='container'>
    <div className='row'>
    <div id={css.container} className='col'>
      <div id={css.row} className='row'>
        <div className='col-lg-8'>
          <h2>Start Built By Science 6Week MuscleBuilding Trainer for FREE today</h2>
          <p>Join BodyFit today to unlock the app for this fitness plan, and many others, in the Apple and Google Play stores Youll be able to track your workouts, nail your nutrition plan, stock up on supps, and get fit on the go.

            Get unlimited access to all of our expert training plans, exclusive savings in our store, and even free shipping</p>
        </div>
        <div className='col-lg-4'>
          <div className={css.footer}>
            <h2>Monthly</h2>
            <h5>$ 6.99  MONTH</h5>
            <p>Billed $6.99 Monthly.
              Try FREE and cancel anytime.</p>
          </div>
          <button className={css.button}>Get Coaching!</button>
        </div>
      </div>

    </div>
    </div>
  </div>
  )
}

export default TrainContent