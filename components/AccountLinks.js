import React from "react";
import styles from "../styles/Home.module.css";

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
          <p>Checkout my github to know what I&apos;m upto these days</p>
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
          href="https://drive.google.com/file/d/1vGEQlo7Xr6I3WLjHwRq2GPWN21Hi-TZU/view?usp=sharing"
          className={styles.card}
          target="_blank"
          rel="noreferrer"
        >
          <h2>Resume &rarr;</h2>
          <p>Download my resume for quick summary of my journey!</p>
        </a>

        <a
          href="mailto:akashdeepshukla007@gmail.com"
          className={styles.card}
          target="_blank"
          rel="noreferrer"
        >
          <h2>Send Email &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>{" "}
    </section>
  );
};

export default AccountLinks;
