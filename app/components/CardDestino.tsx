import Link from 'next/link';
import styles from './CardDestino.module.css';

interface CardDestinoProps {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
}

export default function CardDestino({ id, nome, imagem, descricao }: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.image} />
      <h3 className={styles.title}>{nome}</h3>
      <p className={styles.descricao}>{descricao}</p>
      <Link href={`/destinos/${id}`} className={styles.link}>
        Ver Detalhes
      </Link>
    </div>
  );
}