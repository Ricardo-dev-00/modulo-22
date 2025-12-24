'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { destinos } from '../data/destinos';
import styles from './CarrosselDestinos.module.css';

export default function CarrosselDestinos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Detectar tamanho da tela e ajustar itemsPerView
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 1024) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = destinos.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinos.length - itemsPerView : prevIndex - 1
    );
  };

  const visibleDestinos = destinos.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className={styles.carrosselSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Explore Mais Destinos</h2>
        <div className={styles.carrossel}>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prevSlide}
            aria-label="Destinos anteriores"
          >
            ‹
          </button>

          <div className={styles.slideContainer}>
            <div className={styles.grid}>
              {visibleDestinos.map((destino) => (
                <div key={destino.id} className={styles.card}>
                  <img
                    src={destino.imagem}
                    alt={destino.nome}
                    className={styles.image}
                  />
                  <div className={styles.content}>
                    <h3 className={styles.destinoTitle}>{destino.nome}</h3>
                    <p className={styles.descricao}>{destino.descricao}</p>
                    <Link
                      href={`/destinos/${destino.id}`}
                      className={styles.button}
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={nextSlide}
            aria-label="Próximos destinos"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}