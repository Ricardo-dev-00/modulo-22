import Layout from '../../components/Layout';
import { destinos } from '../../data/destinos';
import styles from '../[id]/destino.module.css';

export default function Destino6() {
  const destino = destinos.find((d) => d.id === '6');

  if (!destino) {
    return <div>Destino não encontrado</div>;
  }

  return (
    <Layout>
      <div className={styles.destino}>
        <img src={destino.imagem} alt={destino.nome} className={styles.image} />
        <h1 className={styles.title}>{destino.nome}</h1>
        <p className={styles.descricao}>{destino.descricao}</p>
        <p className={styles.detalhes}>{destino.detalhes}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Curiosidades</h2>
          <ul className={styles.list}>
            {destino.curiosidades.map((curiosidade, index) => (
              <li key={index} className={styles.listItem}>{curiosidade}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Locais para Visitar</h2>
          <ul className={styles.list}>
            {destino.locais.map((local, index) => (
              <li key={index} className={styles.listItem}>{local}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Restaurantes Recomendados</h2>
          <ul className={styles.list}>
            {destino.restaurantes.map((restaurante, index) => (
              <li key={index} className={styles.listItem}>{restaurante}</li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}