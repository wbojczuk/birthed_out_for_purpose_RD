import styles from "./pagetitle.module.css"

export default function PageTitle(props: {title: string, subtitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <div className={`center ${styles.linkWrapper}`}>
          <a className="main-link" href="https://venmo.com/code?user_id=3291848516829184263" target="_blank">Donate</a>
        </div>

        <img src="/img/pagetitle-bg.webp" className="bg-img" aria-hidden />
        <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className="shader"></div>
    </header>
  )
}
