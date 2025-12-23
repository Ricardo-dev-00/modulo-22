import { notFound } from 'next/navigation';
import Layout from '../../components/Layout';
import { destinos } from '../../data/destinos';
import styles from './destino.module.css';

interface DestinoPageProps {
  params: {
    id: string;
  };
}

export default function DestinoPage({ params }: DestinoPageProps) {
  const destino = destinos.find((d) => d.id === params.id);

  if (!destino) {
    notFound();
  }

  return (
    <Layout>
      <div className={styles.destino}>
        <img src={destino.imagem} alt={destino.nome} className={styles.image} />
        <h1 className={styles.title}>{destino.nome}</h1>
        <p className={styles.descricao}>{destino.descricao}</p>
        <p className={styles.detalhes}>{destino.detalhes}</p>
      </div>
    </Layout>
  );
}