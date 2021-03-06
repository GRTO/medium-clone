import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div>
        <div>
          <h1>Medium is a place to write, read, and connect</h1>
        </div>
        <div>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers
        </div>
      </div>
    </div>
  )
}

export default Home
