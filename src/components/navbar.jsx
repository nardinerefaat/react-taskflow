import React from 'react'
import { Link } from 'react-scroll'
import styles from '../style/header.module.scss'


const Navbar = () => {
  return (
    <>
    <nav className={styles.nav}>
      <Link
        to="home"
        smooth
        offset={-120}
        duration={500}
        spy
        activeClass={styles.active}
        className={styles.link}>
        Home
      </Link>
      <Link
        to="features"
        smooth
        offset={-120}
        duration={500}
        spy
        activeClass={styles.active}
        className={styles.link}>
        Features
      </Link>
      <Link
        to="reviews"
        smooth
        offset={-120}
        duration={500}
        spy
        activeClass={styles.active}
        className={styles.link}>
        Reviews
      </Link>
      <Link
        to="pricing"
        smooth
        offset={-120}
        duration={500}
        spy
        activeClass={styles.active}
        className={styles.link}
        >
        Pricing
      </Link>
      <Link
        to="footer"
        smooth
        offset={-120}
        duration={500}
        spy
        activeClass={styles.active}
        className={styles.link}
        >
        Contact
      </Link>


      
    </nav>
     
    </>
  )
}

export default Navbar
