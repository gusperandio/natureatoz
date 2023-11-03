import { useState, useEffect } from "react";
import { FC } from "react";
import styles from './styles.module.scss';

const Parallax: FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFrozen, setIsFrozen] = useState(false);
    const [imageSize, setImageSize] = useState(100);
  
    // const handleScroll = () => {
    //   const currentScrollPosition = window.scrollY;
    //   setScrollPosition(currentScrollPosition);
    //     console.log(currentScrollPosition)
   
    //   const scrollPositionLimit = 465; 
  
    //   if (currentScrollPosition >= scrollPositionLimit) {
    //     setIsFrozen(true);
    //   } else {
    //     setIsFrozen(false);
    //   }
  
      
    //   if (!isFrozen) {
    //     const newSize = Math.max(minBackgroundSize, (window.outerHeight - currentScrollPosition) / 3);
    //     setImageSize(newSize);
    //   }
    // };
  
    // useEffect(() => {
    //   window.addEventListener("scroll", handleScroll, { passive: true });
  
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, [isFrozen]);
  
    // // Define a minimum background size (e.g., 10%)
    // const minBackgroundSize = 10;
  
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
