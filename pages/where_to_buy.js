import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/layout'

export default function WhereToBuy() {
  return (
    <Layout>
      <Head>
        <title>Where to buy? - FictionShop</title>
        <meta
          name='description'
          content='Find out where you can buy our items!'
        ></meta>
      </Head>

      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-1 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <div className='grid w-full lg:py-6 mb-6 lg:mb-0 items-center'>
              <h1 className='title-font lg:my-10 mt-5 sm:text-4xl text-3xl mb-4 font-medium text-sky-500'>
                How & Where to buy
              </h1>
              <div className='text-gray-200'>
                The FictionShop has yet to be automated and is still run buy the
                admins and mods of ScumFiction. If you want to buy something you
                first need money, which you can find in the game while looting.
                <br />
                <br />
                Our goal is to automate the store via the ingame bot, but this
                is still very far in the future. The bot should then use the
                glory points as currency.
              </div>
            </div>
            <img
              alt='ingame-money'
              className=' w-full h-25 object-contain object-center rounded'
              src='https://scumfiction.com/shop_data/images/money_all2.png'
            />
          </div>
        </div>
        <div className='container px-5 pb-10 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <div className='grid w-full lg:py-6 mb-6 lg:mb-0 items-center'>
              <div className='text-gray-200'>
                You can find our shop in the tradingzone in B2. It's inside a
                savezone where you and your vehicle are safe from damage, and
                sales will only take place there.
              </div>
            </div>
            <img
              alt='tradingzone'
              className=' w-full lg:h-auto lg:px-20 h-64 object-contain object-center rounded'
              src='https://scumfiction.com/shop_data/images/tradingzone.jpg'
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
