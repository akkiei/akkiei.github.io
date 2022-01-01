import React from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import AccountLnks from "../components/AccountLinks";
const Body = () => {
  return (
    <section>
      <main className={styles.main}>
        {/* <div className={styles.quoteMobile}> */}
          <h3 className={styles.quote}>
            <q>Have the courage to follow your heart and intuition.</q>
          </h3>
        {/* </div> */}
        <AccountLnks />
      </main>
    </section>
  );
};

export default Body;
