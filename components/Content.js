import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import build from '../styles/built.module.css'
function Content() {
    return (
      
       <div className='container'>
        <div className={build.title}>
            <h1>Training</h1>
        </div>
             <div  className='row'>
                <div  className='col-lg-6'>
                  <div id={build.div1}></div>
                </div>
                <div id={build.div2} className='col-lg-6'>

                    <h3>Cellucor 6-Week Built By Science Trainer</h3>
                    <p>In-depth training plan follows a five-day split that is broken into two phases: Build Muscle and Strength Development.</p>
                    <div className={build.iconDiv}>
                    <p>Start Training   </p>
                   <Link href="/builtRead"> <i class="fa-solid fa-arrow-right"></i></Link>
                 
                    </div>
                    <p>Join Today !</p>


                </div>
            </div>
       </div>
         

    )
}

export default Content