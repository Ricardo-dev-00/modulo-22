import Layout from '../components/Layout';
import CardDestino from '../components/CardDestino';
import { destinos } from '../data/destinos';
import styles from './destinos.module.css';

export default function Destinos() {
  return (
    <Layout>
      <div className={styles.destinos}>
        <h1 className={styles.title}>Destinos Turísticos</h1>
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
      </div>
    </Layout>
  );
}