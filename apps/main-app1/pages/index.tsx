import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {NextPage} from 'next';
import { sum } from '@test/common';
import { SimpleButton, SumButton, MaterialButton } from '@test/uxui';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next10 MonoRepo with Typescript
        </h1>

        <p className={styles.description}>
            Sum Util: {sum(3, 5)}
        </p>

          <p className={styles.description}>
              Imported Button
              <SimpleButton>Button from Lib</SimpleButton>
          </p>

          <p className={styles.description}>
              Imported Button with inner lib dependency
              <SumButton />
          </p>

          <p className={styles.description}>
              Imported Button with third party lib dependency
              <MaterialButton variant="contained" >Material</MaterialButton>
          </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home;
