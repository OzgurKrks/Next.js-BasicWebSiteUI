import React from 'react'
import Image from 'next/image'
import css from '../styles/builtRead.module.css'
import Link from 'next/link'
function Read4() {
  return (
    <div>
      <div id={css.container}className="container">
        <h1>Training for Power: Do I Need it and How Should I Add it to My Routine?</h1>
        <p>Whether youre training for a race, an intramural league, or simply because you like to, improving muscular power can be a great addition to your workout regimen.</p>
        <Image  id={css.imgRow} className="col-12" width={900} height={460} alt="training" src="/chinup.jpg"></Image>
        <div className={css.athr}>
          <Image src="/auther.png" width={80} height={80} />
          <div>
            <h3>Carny Robbins</h3>
            <p>December 12,2022. 2 min read</p>
          </div>
        </div>
        <div className={css.content} >
          <p>Whether youre training for a race, an intramural league, or simply because you like to, improving muscular power can be a great addition to your workout regimen. First, jumping high and sprinting fast is cool. But really, adding training for power to your toolkit helps make you more resilient and versatile as a mover.  </p>
          <p>A great example of what happens when you dont train for power backyard football over the holidays. Inevitably, someone pulls a hamstring or throws out their back because on one day each year, they knock the dust off the jets and move quicker than they do the other 364. </p>
          <p>In all seriousness, being prepared for sudden bursts of movement can make you a better performer in competition. It also can protect you when you lunge quickly to catch something from falling off a table or sub for your friends indoor soccer league. </p>
          <p>Training for power is the practice of performing muscular contractions quickly. The intent is to condition your motor units to fire simultaneously, creating a powerful muscular contraction. </p>
        </div>
        <div className={css.Talk}>
          <h1>Lets Talk Load</h1>
          <p>Youre probably familiar with the dozens of plyometric variations of bodyweight or near-bodyweight power. Box jumps, broad jumps, medicine ball throws, and so on. If these arent doing the trick for you, level up your power training and implement two things loaded movements for speed and sprints. Here are some guidelines for where to start your power training</p>
          <ul>
            <li><p>Unloaded bodyweight for sets of 5 reps. Examples one fiveyard sprint, three box jumps</p></li>
            <li><p>Loaded plyos  1030 bodyweight for a set of 15 reps. Examples three dumbbell squat jumps, five medicine ball slams, three clap pushups.</p></li>
            <li><p>Main lifts for speed body weight for sets of 1-5. Example three speed back squats, five speed bench presses.</p></li>
          </ul>
          <p>Now that youve picked out some exercises and figured out how to load them, lets work them into your strength training </p>
          <p>1. Perform your powerbased exercises near the beginning of your workouts. To optimize motor unit synchronization and muscular contractile power, its important that yre not fatigued when doing your powerbased exercises. Do this training right after your warm up. Though theres a time and place to do these in a compromised state, the primary adaptation youre looking for wont occur. </p>
          <p>2. Separate your repetitions. Perform each rep as its own. Maximally stand up, press, pull, or jump each and every rep, reset your stance or starting position, then do it again. A great way to think about this concept is, perform one rep three times rather than a set of three reps.  </p>
          <p>3. Take adequate rest in between sets. True power training not only relies on muscles not being fatigued or sore but also on your energy systems replenishing the substrates that the muscles require to do what you want them to do. Long story short, rest at least two to three minutes between sets.</p>
          <p>Training for power can be a huge benefit to everyones movement health, regardless of their fitness goals. Even if implemented at the simplest levels, exposing your body to variable stimuli can better prepare for the expected and the spontaneous. So, get moving </p>
          
        </div>

          <h4 id={css.h4}>You may like</h4>
      
        <div id={css.row} className='row'>
        
         <div className='col'>
         <Link href="/read1">
            <Image src="/traning.jpg" width={300} height={200}/>
            <h4>Training for Power</h4>
            </Link>
          </div>
        
          <div className='col'>
            <Link href="/read2">
            <Image src="/calis.jpg" width={300} height={200}/>
            <h4>5 Calisthenics Exercises</h4>
            </Link>
          </div>
          <div className='col'>
            <Link href="/read3">
            <Image src="/workout.jpg" width={300} height={200}/>
            <h4>Do I Need ?</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Read4