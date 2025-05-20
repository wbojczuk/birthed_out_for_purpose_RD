import Link from 'next/link';
import styles from './donate.module.css';
import Shader from '../../misc/Shader/Shader';

export default function Donate(){
return (
 <>
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h2>Donate</h2>
        <p>When you give to Birthed Out For Purpose, you help bring hope, healing, and purpose to teens and individuals experiencing homelessness. Every donation supports mentorship, workshops, resources, and safe spaces where lives are transformed through God’s love. Thank you for sowing into futures filled with faith and purpose.
<br /><br />
Together, we can restore what’s been broken and help others rise.</p>
<br /><br />
<Link href="/contact" className='main-link'>Contact Us</Link>
    </div>
    <div className={styles.videoWrapper}>
        <img src="/img/donate.webp" alt="image of a plant" />
        <Shader background='#CF3AE9' opacity={.35} zIndex={1} />
    </div>

    <img src="/img/ourbook-bg.webp" aria-hidden className="bg-img" />
    <div className="shader" style={{backgroundColor: "rgba(255,255,255,.88)"}}></div>
 </div>
 </>
)};