import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar'
import MainBody from '../components/MainBody'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>blogr</title>
        <meta name="description" content="Get Your Ideas Out Into The World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Sidebar />
        <MainBody />
      </main>
    </div>
  );
}
