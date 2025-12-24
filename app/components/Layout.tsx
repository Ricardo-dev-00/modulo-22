import Link from 'next/link';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/destinos" className={styles.link}>Destinos</Link>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Informações</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="#" className={styles.footerLink}>Onde encontrar</Link></li>
              <li><Link href="#" className={styles.footerLink}>Dúvidas / FAQ</Link></li>
              <li><Link href="#" className={styles.footerLink}>Trabalhe Conosco</Link></li>
              <li><Link href="#" className={styles.footerLink}>Política de Privacidade</Link></li>
              <li><Link href="#" className={styles.footerLink}>LGPD / Termo de Uso</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Central de Atendimento</h3>
            <div className={styles.contactInfo}>
              <p><strong>4004-1234</strong> (capitais e grandes centros)</p>
              <p><strong>0800-123-4567</strong> (demais localidades)</p>
              <p><strong>WhatsApp Comercial:</strong> (11) 98765-4321</p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Baixe Nosso App</h3>
            <div className={styles.appStores}>
              <Link href="#" className={styles.appLink}>
                <span className={styles.appIcon}>🍎</span>
                Disponível na Apple Store
              </Link>
              <Link href="#" className={styles.appLink}>
                <span className={styles.appIcon}>🤖</span>
                Disponível no Google Play
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Portal de Viagens. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}