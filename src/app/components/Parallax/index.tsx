import { useState, useEffect } from "react";
import { FC } from "react";
import styles from './styles.module.scss';

const Parallax: FC = () => {

  // Foto de Braulio Espinoza Sánchez: https://www.pexels.com/pt-br/foto/animais-bichos-passarinhos-passaro-16975490/
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageSize, setImageSize] = useState(100); // Tamanho inicial da imagem (como porcentagem)

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setScrollPosition(currentScrollPosition);

    // Define um limite mínimo e máximo para o tamanho da imagem
    const minSize = 10; // Tamanho mínimo da imagem (como porcentagem)
    const maxSize = 100; // Tamanho máximo da imagem (como porcentagem)

    // Calcula o tamanho da imagem com base na posição de rolagem
    const newSize = Math.min(maxSize, Math.max(minSize, 100 - currentScrollPosition / 10)); // Ajuste os valores como necessário

    setImageSize(newSize);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={styles.main}>
      <section
        style={{
            backgroundSize: `${imageSize}%`,
          }}
        className={`${styles.banner} ${styles.container}`}
      >
        <h2>Parallax</h2>
        <button>Get Started</button>
      </section>
      <section className={`${styles.container}`}>
        <h2>What is parallax?</h2>
        <p>
          Parallax is a displacement or difference in the apparent position of
          an object viewed along two different lines of sight and is measured by
          the angle or half-angle of inclination between those two lines. Due to
          foreshortening, nearby objects show a larger parallax than farther
          objects, so parallax can be used to determine distances.
        </p>
        <p>
          Parallax also affects optical instruments such as rifle scopes,
          binoculars, microscopes, and twin-lens reflex cameras that view
          objects from slightly different angles. Many animals, along with
          humans, have two eyes with overlapping visual fields that use parallax
          to gain depth perception; this process is known as stereopsis. In
          computer vision the effect is used for computer stereo vision, and
          there is a device called a parallax rangefinder that uses it to find
          the range, and in some variations also altitude to a target.
        </p>
        <p>
          Parallax is a displacement or difference in the apparent position of
          an object viewed along two different lines of sight and is measured by
          the angle or half-angle of inclination between those two lines. Due to
          foreshortening, nearby objects show a larger parallax than farther
          objects, so parallax can be used to determine distances.
        </p>
        <p className={styles.p}>
          Parallax also affects optical instruments such as rifle scopes,
          binoculars, microscopes, and twin-lens reflex cameras that view
          objects from slightly different angles. Many animals, along with
          humans, have two eyes with overlapping visual fields that use parallax
          to gain depth perception; this process is known as stereopsis. In
          computer vision the effect is used for computer stereo vision, and
          there is a device called a parallax rangefinder that uses it to find
          the range, and in some variations also altitude to a target.
        </p>
      </section>
    </div>
  );
};

export default Parallax;
