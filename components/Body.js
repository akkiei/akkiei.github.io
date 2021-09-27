import React from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import AccountLnks from "../components/AccountLinks";
const Body = () => {
  return (
    <section>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          <Header />
        </h1> */}
        <p className={styles.description}>
          <q>Learn by doing something new today</q>
        </p>

        <AccountLnks />
      </main>
    </section>
  );
};

export default Body;
