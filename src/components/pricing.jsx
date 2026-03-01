import React from 'react'
import { useState , useEffect } from 'react';
import styles from '../style/pricing.module.scss'


const Pricing = () => {
 

  const[plans , setPlans] = useState([])

  useEffect(()=>{
    fetch('/pricing.json')
      .then(res => res.json())
      .then((data)=> setPlans(data))
      .catch(err=> console.log(err))
    
  },[])

  return (
    <div className={styles.pricing}>
      {plans.map((plan,index)=>(
        <div key={index} className={styles.pricingItem}>
          <h2>{plan.title}</h2>
          <h3>{plan.price}</h3>
          <p>{plan.features}</p>
        </div>
      ))}
    </div>
  )
}

export default Pricing
