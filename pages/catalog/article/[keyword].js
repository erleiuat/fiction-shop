import Layout from 'components/layout'
import Image from 'next/image'
import Head from 'next/head'
import fs from 'fs'

export default function Article({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.name} - Article from FictionShop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='mx-auto flex flex-wrap'>
            <Image
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src={article.image}
              width={400}
              height={400}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {article.category.toUpperCase()}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {article.name}
              </h1>
              <p className='leading-relaxed'>{article.description}</p>
              <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'></div>
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  ${article.price}
                </span>
                <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = JSON.parse(fs.readFileSync('public/articleList.json'))

  const paths = articles.map(article => ({
    params: { keyword: article.keyword }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const articles = JSON.parse(fs.readFileSync('public/articleList.json'))
  const article = articles.filter(
    article => article.keyword === params.keyword
  )[0]
  return { props: { article } }
}
