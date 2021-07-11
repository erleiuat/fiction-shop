import Layout from 'components/layout'
import Image from 'next/image'
import Head from 'next/head'

export default function Article({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.name} - Article from FictionShop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-gray-200 body-font mx-auto overflow-hidden w-full'>
        <div className='container mx-auto items-center'>
          <div className='flex w-full'>
            <Image
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src={article.image}
              width={400}
              height={400}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-300 tracking-widest'>
                {article.category.toUpperCase()}
              </h2>
              <h1 className='text-gray-100 text-4xl title-font font-medium mb-4'>
                {article.name}
              </h1>
              <p className='leading-relaxed text-md'>{article.description}</p>
              <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'></div>
              <div className='flex'>
                <span className='title-font font-bold text-4xl text-sky-500'>
                  ${article.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`https://scumfiction.com/shop_data/items.json`)
  const articles = await res.json()

  const paths = articles.map(article => ({
    params: { keyword: article.keyword }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://scumfiction.com/shop_data/items.json`)
  const articles = await res.json()
  const article = articles.filter(
    article => article.keyword === params.keyword
  )[0]
  return { props: { article } }
}
