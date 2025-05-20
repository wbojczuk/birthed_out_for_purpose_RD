import Link from 'next/link';
import styles from './volunteer.module.css';
import Shader from '../../misc/Shader/Shader';

export default function Volunteer(){
return (
 <>
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h2>Volunteer</h2>
        <p>At Birthed Out For Purpose, volunteers are the heart of our mission. Whether you're passionate about mentoring, event support, outreach, or behind-the-scenes help, your time and gifts can bring healing, hope, and purpose to those we serve. We believe that when we come together in love and faith, lives are transformed — including our own.
<br /><br />
If you’re ready to serve with compassion and purpose, we’d love to connect with you. Please use the contact form on our Contact page to reach out and learn more about current volunteer opportunities!</p>
<br /><br />
<Link href="/contact" className='main-link'>Contact Us</Link>
    </div>
    <div className={styles.videoWrapper}>
        <img src="/img/volunteer.png" alt="image of hands" />
        <Shader background='#CF3AE9' opacity={.35} zIndex={1} />
    </div>

    <img src="/img/ourbook-bg.png" aria-hidden className="bg-img" />
    <div className="shader" style={{backgroundColor: "rgba(255,255,255,.88)"}}></div>
 </div>
 </>
)};