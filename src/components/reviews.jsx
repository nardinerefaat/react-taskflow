import React from 'react'
import styles from '../style/reviews.module.scss'
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";


import client1 from '../images/5.jpeg'
import client2 from '../images/6.jpeg'
const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <h1>Reviews</h1>
      <div className={styles.reviewsContainer}>
        <div className={styles.reviewsItems}> 
          {
            [Array.from({length:5}).map((_,index)=>(
               <IoStarSharp key={index} style={{color:'gold'}}/>
            ))]
          }
          <p>Absolutely amazing work! The UI was clean, modern, and fully responsive. Everything worked perfectly across devices. Highly recommended.</p>
          <img src={client1} alt="" />
          <h6>Jillie Bernard</h6>
        </div>
        <div className={styles.reviewsItems}> 
          {
            [Array.from({length:5}).map((_,index)=>(
              <IoStarSharp key={index} style={{color:'gold'}}/>
            ))]
          }
          <p>Very professional and fast delivery. They understood the requirements immediately and improved the design beyond what I expected.</p>
          <img src={client2} alt="" />
          <h6>Jillie Bernard</h6>
        </div>
        <div className={styles.reviewsItems}> 
          {
            [Array.from({length:4}).map((_,index)=>(
              <IoStarSharp key={index} style={{color:'gold'}}/>
            ))]
          }<RiStarSLine style={{color:'gold'}}/>
          <p>Great front-end skills and strong attention to detail. Minor revisions were needed, but they handled feedback quickly and efficiently.</p>
          <img src={client1} alt="" />
          <h6>Jillie Bernard</h6>
        </div>
      </div>
    </div>
  )
}

export default Reviews
