import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akkiei</title>
        <meta name="description" content="his is the portfolio of Akash Deep Shukla" />
        <link rel="icon" href="/akash-icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet" />
      </Head>
      <h1 className={styles.title}>
        <Header />
      </h1>
      <Body />

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Footer />
        </span>

      </footer>
    </div>
  );
}
