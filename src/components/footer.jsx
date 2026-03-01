import React from 'react'
import styles from '../style/footer.module.scss'
import { FaLinkedin , FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp   } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";




const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.linkedin.com/in/nardine-refaat-783286290/"
         target="_blank"
         style={{color:'rgb(0, 102, 255)'}}
         rel="noreferrer"
      >
        <FaLinkedin/>
      </a>
      <a href="https://wa.me/201287593651"
         target="_blank"
         style={{color:'rgb(10, 179, 5)' }}
         rel="noreferrer"
      >
        <IoLogoWhatsapp/>
      </a>
      <a href="https://github.com/nardinerefaat"
         target="_blank"
         style={{color:'rgb(37, 37, 37)'}}
         rel="noreferrer"
      >
        <FaGithub />
      </a>
      
      <a href="mailto:nardinerefaat2@gmail.com"
         target="_blank"
         style={{color:'rgb(116, 0, 0)'}}
         rel="noreferrer"
      >
        <IoMailUnreadOutline/>
      </a>
      
      
    </div>
  )
}

export default Footer
