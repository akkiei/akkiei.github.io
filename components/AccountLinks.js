import React from "react";
import styles from "../styles/Home.module.css";
import EmailCard from './EmailCard'
const AccountLinks = () => {
  return (
    <section>
      <div className={styles.grid}>
        <a
          href="https://github.com/akkiei"
          className={styles.card}
          target="_blank"
          rel="noreferrer"
        >
          <h2>GitHub &rarr;</h2>
          <p>Checkout my github to know what I&apos;m upto these days...</p>
        </a>

        <a
          href="https://www.linkedin.com/in/akash-deep-shukla/"
          className={styles.card}
          target="_blank"
          rel="noreferrer"
        >
          <h2>LinkedIn &rarr;</h2>
          <p>Learn about my professional journey so far !</p>
        </a>

        <a
          href="https://drive.google.com/file/d/1lDaAHDgeJuVi_oFxrxWkM9aMD36lvuxP/view?usp=sharing"
          className={styles.card}
          target="_blank"
          // rel="noreferrer"
        >
          <h2>Resume &rarr;</h2>
          <p>Download my resume for a quick summary !</p>
        </a>

        <EmailCard/>
      </div>
    </section>
  );
};

export default AccountLinks;
