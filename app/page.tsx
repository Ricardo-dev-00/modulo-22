

import Link from 'next/link';
import Layout from './components/Layout';
import CardDestino from './components/CardDestino';
import { destinos } from './data/destinos';
import styles from './page.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <h1 className={styles.title}>Bem-vindo ao Portal de Viagens</h1>
        <p className={styles.description}>
          Explore destinos incríveis ao redor do mundo. Descubra culturas, paisagens e aventuras inesquecíveis.
        </p>
        <h2 className={styles.subtitle}>Destinos em Destaque</h2>
        <div className={styles.grid}>
          {destinos.map((destino) => (
            <CardDestino
              key={destino.id}
              id={destino.id}
              nome={destino.nome}
              imagem={destino.imagem}
              descricao={destino.descricao}
            />
          ))}
        </div>
        <Link href="/destinos" className={styles.button}>
          Ver Todos os Destinos
        </Link>

        <section className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Por que escolher nossa plataforma?</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>🌍</div>
              <h3 className={styles.cardTitle}>Destinos Diversos</h3>
              <p className={styles.cardText}>
                Explore centenas de destinos incríveis ao redor do mundo. De praias paradisíacas a montanhas majestosas,
                encontre o lugar perfeito para suas férias dos sonhos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>✈️</div>
              <h3 className={styles.cardTitle}>Experiências Únicas</h3>
              <p className={styles.cardText}>
                Viva aventuras inesquecíveis com nossas experiências exclusivas. Mergulhe em culturas locais,
                saboreie culinárias autênticas e crie memórias que durarão para sempre.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>🛡️</div>
              <h3 className={styles.cardTitle}>Suporte Completo</h3>
              <p className={styles.cardText}>
                Conte com nosso suporte 24/7 durante toda sua jornada. Desde o planejamento até o retorno,
                estamos aqui para garantir que sua viagem seja perfeita e sem preocupações.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
