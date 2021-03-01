import styles from '../styles/portfolio.module.scss'

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <section className={styles.footerGrid}>
          <div className={styles.brand}>penha.</div>
          <div className={styles.contact}>
            <div className={styles.contactText}>Contato</div>
            <div className={styles.contactLinks}>
              <i className={`far fa-envelope fa-lg`} />
              <i className={`fab fa-instagram fa-lg`} />
              <i className={`fab fa-whatsapp fa-lg`} />
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}
