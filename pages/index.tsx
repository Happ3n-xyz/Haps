import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Featured from '../components/home/Featured';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Haps - By Happ3n</title>
        <meta
          name="Haps by happ3n"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Featured />
    </div>
  );
};

export default Home;
