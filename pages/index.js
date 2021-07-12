import Head from 'next/head'
import Link from 'next/link'
import Layout from 'components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>FictionShop</title>
        <meta
          name='description'
          content='Welcome to the FictionShop! Your source for the most premium items to buy.'
        ></meta>
      </Head>

      <section className='text-gray-300'>
        <div className='container mx-auto flex px-3 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow lg:w-1/2 lg:pr-24 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center'>
            <h1 className='sm:text-4xl text-3xl mb-4 text-gray-100'>
              Welcome to the{' '}
              <a className='text-sky-500 font-bold'>FictionShop</a>
            </h1>
            <p className='mb-8 leading-relaxed'>
              Here you can look for items to buy on our Server.
            </p>
            <div className='flex justify-center my-2 w-full'>
              <Link href='catalog/premium'>
                <button className='w-full inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg'>
                  Premium
                </button>
              </Link>
              <Link href='catalog/vehicles'>
                <button className='w-full inline-flex text-white bg-sky-500 border-0 mx-3 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg'>
                  Vehicles
                </button>
              </Link>
            </div>
            <div className='flex justify-center my-1 w-full'>
              <Link href='catalog/pharmacy'>
                <button className='w-full inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg'>
                  Pharmacy
                </button>
              </Link>
              <Link href='catalog/kits'>
                <button className='w-full inline-flex text-white bg-sky-500 border-0 mx-3 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg'>
                  Kits
                </button>
              </Link>
            </div>
            <div className='flex justify-center my-2 w-full'>
              <Link href='catalog/'>
                <button className='w-full inline-flex text-white bg-sky-500 border-0 py-2 mr-3 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg'>
                  All Items
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full w-5/6'>
            <img
              className='object-cover object-center rounded'
              src='https://scumfiction.com/shop_data/images/logo.gif'
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
