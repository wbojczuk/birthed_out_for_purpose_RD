import Link from 'next/link';
import styles from './ourbook.module.css';

export default function OurBook(){
return (
 <>
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h2>Our Book</h2>
        <p>Birthed Out For Purpose is a powerful, faith-filled book that shares the founder’s personal journey from pain to purpose. Written for teen girls and women who’ve faced trauma or adversity, it offers encouragement, healing, and hope through honest storytelling and spiritual truth.
<br /><br />
More than a testimony, it’s a tool to help readers realize they are not broken — they are becoming. Their story doesn’t end with what happened to them — it begins with what’s being birthed from them.</p>
<br /><br />
<Link href="/contact" className='main-link'>Contact Us</Link>
    </div>
    <div className={styles.videoWrapper}>
   <img src="/img/bookcover.webp" alt="image of a book cover" />
    </div>

    <img src="/img/ourbook-bg.webp" aria-hidden className="bg-img" />
    <div className="shader" style={{backgroundColor: "rgba(255,255,255,.88)"}}></div>
 </div>
 </>
)};