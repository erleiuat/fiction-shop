import Layout from 'components/layout'
import Image from 'next/image'
import Head from 'next/head'

export default function Article({ article }) {
  function buildProperties(article) {
    if (article.properties) {
      let list = []
      for (const key in article.properties) {
        list.push(
          <div key={key} className='flex border-t border-gray-800 py-2'>
            <span className='text-gray-300'>{key}</span>
            <span className='ml-auto text-white'>
              {article.properties[key]}
            </span>
          </div>
        )
      }
      return list
    }
  }

  return (
    <Layout>
      <Head>
        <title>{article.name} - Article from FictionShop</title>
        <meta name='description' content={article.description}></meta>
      </Head>
      <section className='text-gray-400 bg-gray-900 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              className='lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded'
              src={article.image}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {article.category}
              </h2>
              <h1 className='text-white text-3xl title-font font-medium mb-1'>
                {article.name}
              </h1>
              <p className='leading-relaxed mb-2'>{article.description}</p>
              {buildProperties(article)}
              <div className='flex mt-1 items-center pb-3 border-b-2 border-gray-800 mb-5'></div>
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-white'>
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
