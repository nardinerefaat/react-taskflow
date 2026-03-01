import styles from '../style/header.module.scss'
import Navbar from './navbar'


const Header = () => {
  return (
    <div className={styles.header}>
        <span className={styles.circle}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
 
        <h1 style={{fontSize:'40px'}}>TaskFlow</h1>

        <Navbar/>
        
        
       
        
    </div>
  )
}

export default Header
