"use client"
import styles from "./mission.module.css"
import Link from "next/link"

export default function Mission() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img id="ourMission" className={styles.img} src={"/img/mission.webp"} width={360} height={600} alt="Image of happy teens" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline"><strong>Our</strong> Mission</span></h2>

            <p>At Birthed Out For Purpose, our mission is to empower teens who are facing trauma, abuse, neglect, or instability by helping them heal, grow, and step into the purpose they were created for. We provide a safe, supportive space where each young teen is seen, heard, and reminded that her story doesn’t end with pain — it begins with purpose.
<br /><br />
Through mentorship, life-skills training, creative expression, and faith-based encouragement, we walk alongside teens on their journey to restoration. We believe that everyone deserves to know their worth, embrace their identity, and live a life full of hope, healing, and purpose. Our goal is simple: to help them rise — not just survive, but thrive.
            </p>
            <Link href="/contact" className="main-link">Contact Us</Link>
        </div>

        <img src="/img/cross.webp" alt="image of the cross" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.95)"}}></div>
    </section>
  )
}
