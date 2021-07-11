import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FictionShop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-6xl font-bold'></h1>
      <section className='text-gray-300 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100'>
              Welcome to the{' '}
              <a className='text-sky-500 font-bold'>FictionShop</a>
            </h1>
            <p className='mb-8 leading-relaxed'>
              Here you can look for items to buy on our Server.
            </p>
            <div className='flex justify-center'>
              <Link href='catalog/premium'>
                <button className='inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg'>
                  Premium
                </button>
              </Link>
              <Link href='catalog/vehicles'>
                <button className='inline-flex text-white bg-sky-500 border-0 mx-3 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg'>
                  Vehicles
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <Image
              className='object-cover object-center rounded'
              src='https://scumfiction.com/shop_data/logo.gif'
              width={420}
              height={260}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
