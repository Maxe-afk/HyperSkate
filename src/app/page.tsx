import Products from "@/ui/articleCard"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <img src="/images/logo.png" alt="logo of the site" className={styles.logo} />
          <h2>HyperSkate</h2>
        </nav>
        <img src="/images/panier.svg" className={styles.shop} />
      </header>
      <main className={styles.main}>
        <p className={styles.intro}>Bienvenue au royaume des patins<br/>Depuis les années 80 le monde du transport et du sport n&apos;a cessé d&apos;évoluer. Chez HyperSkate nous avons trouvé comment subvenir à tout vos besoins.<br/>Nous vous proposons une large gamme de patins à roulettes pour tout les sports que vous pouvez pratiquer.<br/>N&apos;hésitez plus, optez pour HyperSkate.</p>
        <section className={styles.presentation}>
          <img src="/images/product.png" className={styles.productPhoto} />
          <p className={styles.intro2}>Après des années de recherche, de prototypes secrets et de tests intensifs, le projet voit enfin le jour : découvrez les tout premiers patins à roulettes spécialement conçus pour des sports qui n’en avaient pas besoin… jusqu’à aujourd’hui.</p>
        </section>
        <Products />
        <img src="https://wallpapersok.com/images/hd/synthwave-grid-mountains-1qxfiiabdb5qle2q.jpg" className={styles.background} />
      </main>
    </>
  )
}
