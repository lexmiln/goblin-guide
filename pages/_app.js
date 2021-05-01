import Head from "next/head";
import "../styles/globals.css";
import styles from "../styles/App.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
