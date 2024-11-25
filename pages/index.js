import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firebase</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <div style={{ overflow: "hidden" }}>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRFOpM1Gd9_mSkpsIMVFhbDYpzLWeJiWbbRa2y1DV9OsOY3q5F12ThX9ALq3w2FEEFRu0qQAY1PS0cM/embed?start=false&loop=false&delayms=3000"
          width="960"
          height="569"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}
