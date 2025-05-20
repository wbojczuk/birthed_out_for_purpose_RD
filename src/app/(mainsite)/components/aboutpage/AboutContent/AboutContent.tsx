"use client"
import styles from "./aboutcontent.module.css"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/aboutus.png"} width={360} height={600} alt="Image of teens" />
            <div className="shader" style={{zIndex: "1", backgroundColor: "var(--primary-color)", opacity: 0.46}}></div>
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline">About Us</span></h2>

            <p>Birthed Out For Purpose is a faith-based nonprofit dedicated to helping teen girls and individuals facing homelessness find healing, hope, and purpose through Jesus Christ. Founded by someone who personally walked through trauma, silence, and restoration, our mission is to remind others that they are not broken — they are becoming. We believe that no matter what you’ve been through, God can use your story for something greater.
<br /><br />
We offer mentoring, life-skills workshops, encouragement, and spiritual support to help people rebuild their lives from the inside out. Whether it’s a young girl healing from her past or a family trying to find stability, we walk with each person in love, truth, and grace. At Birthed Out For Purpose, we speak life into broken places, and we trust God to bring beauty from pain — because every life has value, and every story has a purpose.
            </p>
            <a href="/contact" className="main-link">Contact Us</a>
        </div>

        <img src="/img/cross.png" alt="image of the cross" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.95)"}}></div>
    </section>
  )
}
