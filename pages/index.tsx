import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import QRCode from 'react-qr-code';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [value, setValue] = useState<string>('')
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <QRCode value={value} />
        <input className={styles.input} value={value} onChange={e => setValue(e.target.value)} />
      </main>
    </div>
  )
}

export default Home
