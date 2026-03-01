import React from 'react'
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { MdViewComfy } from "react-icons/md";
import { FaDatabase,FaTasks } from "react-icons/fa";
import styles from '../style/features.module.scss'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
const Features = () => {
  return (
  <div className={styles.features}>
    <h1>Features</h1>

    <div className={styles.features_container}>

      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <RiCheckboxMultipleFill />
        </div>
        <h3>Multi-Projects</h3>
        <p>Manage multiple projects efficiently from one centralized dashboard.</p>
        <img src={img1} alt="" />
      </div>

      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <MdViewComfy />
        </div>
        <h3>Project Views</h3>
        <p>Switch between board, list, and timeline views effortlessly.</p>
        <img src={img2} alt="" />
      </div>

      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <FaDatabase />
        </div>
        <h3>Intake Forms</h3>
        <p>Collect and organize requests with customizable forms.</p>
        <img src={img3} alt="" />
      </div>

      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <FaTasks />
        </div>
        <h3>Unlimited Tasks</h3>
        <p>Create unlimited tasks and projects with no restrictions.</p>
        <img src={img4} alt="" />
      </div>

    </div>
  </div>
  )
}

export default Features
