

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
      </div>
    </Layout>
  );
}
