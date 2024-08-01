import React from "react";
import styles from "../styles/Home.module.css";
import EmailCard from "./EmailCard";

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
          href="https://docs.google.com/document/d/1MxveNVDqZqmg0wADr9n0TXEdhUicIOdcK8611Vmb8po/edit?usp=sharing"
          className={styles.card}
          target="_blank"
          rel="noreferrer"
        >
          <h2>Resume &rarr;</h2>
          <p>Download my resume for a quick summary !</p>
        </a>

        <EmailCard />
      </div>
    </section>
  );
};

export default AccountLinks;
