import Products from "@/ui/articleCard"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <img src="/images/logo.png" alt="logo of the site" className={styles.logo} />
          <h2>HyperSkate</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/126/126083.png" className={styles.shop} />
        </nav>
      </header>
      <main className={styles.main}>
        <p className={styles.intro}>Bienvenue au royaume des patins<br/>Depuis les années 80 le monde du transport et du sport n&apos;a cessé d&apos;évoluer. Chez HyperSkate nous avons trouvé comment subvenir à tout vos besoins.<br/>Nous vous proposons une large gamme de patins à roulettes pour tout les sports que vous pouvez pratiquer.<br/>N&apos;hésitez plus, optez pour HyperSkate.</p>
        <Products />
      </main>
    </>
  )
}
