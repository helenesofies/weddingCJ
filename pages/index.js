import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FlowerSVG from '../components/Images/FlowerSVG';
import CalendarSVG from '../components/Images/CalendarSVG';
import PasswordProtection from '../components/PasswordProtection';

export default function Home() {

  const clearAuthentication = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.reload();
  };

  return (
    <PasswordProtection>
      <div>
        <Head>
          <title>Chris x Julie</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.container}>
          <div className={styles.flowerImage}><FlowerSVG /></div>
          <div className={styles.title}>
            <p>Chris x Julie are getting married </p>
          </div>

          <div className={styles.timeandplace}>
            <p>Kjørbo Gård, Sandvika, Norway</p>
            <p>September 2024</p>
          </div>

          <div className={styles.calendar}>
            <CalendarSVG />
          </div>

          <div className={styles.timeandplace}>
            <p>What part of the wedding are you attending?</p>
          </div>

          <div className={styles.buttons}>
            <a href='/day' className={styles.button}>
              <div className={styles.buttonSecondary}>
                <p>Full day</p>
              </div>

            </a>


            <a href='/evening' className={styles.button}>
              <div className={styles.buttonSecondary}>
                <p>Evening only</p>
              </div>

            </a>
          </div>
        </div>
      </div>
    </PasswordProtection>

  );
}
