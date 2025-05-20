import styles from "./contactinfo.module.css"
import FreeEstimateForm from "../FreeEstimateForm/FreeEstimateForm"
import Shader from "../../misc/Shader/Shader"
export default function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
        <div className={styles.formWrapper}>
          <h2>Get in touch<span className="highlight">!</span></h2>
          <p>Contact us. We’re always happy to hear from someone and answer any questions you may have</p>
          <FreeEstimateForm />
        </div>
        <div className={styles.imgWrapper}>

            <div className={styles.contentWrapper}>
              <h5>Email</h5>
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
            </div>

            <div className={styles.contentWrapper}>
              <h5>Phone Number</h5>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
            </div>

            <img src="/img/contact.webp" alt="image of cross" className="bg-img" />
            <Shader background="var(--primary-color-dark)" opacity={0.8}  />
        </div>
        
          <img style={{zIndex: -4}} src='/img/contact2.webp' alt='Image of sunset' className='bg-img' />
         <Shader background="rgb(249,249,249)" opacity={.82} zIndex={-3} />
    </section>
  )
}
