import styles from './helping.module.css';

export default function Helping(){
return (
 <div className={styles.helping}>

    <h2>Help Make<br />A Difference</h2>

    <p>Your contributions drive our ability to achieve our mission and better support our community.</p>

    <a href="" target='_blank' className="main-link">Donate</a>
 
    <img style={{objectPosition: "top"}} src='/img/helping.webp' alt='Image of Teens' className='bg-img' />
    <div className='gradient-shader'></div>
 </div>
)};