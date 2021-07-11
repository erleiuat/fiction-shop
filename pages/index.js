import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FictionShop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-6xl font-bold'>
        Welcome to <a className='text-blue-400'>FictionShop</a>
      </h1>
      <div>
        <p></p>
      </div>
    </Layout>
  )
}
