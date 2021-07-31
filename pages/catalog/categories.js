import Head from 'next/head'
import Layout from 'components/layout'
import Link from 'next/link'
import shopItems from 'public/shop_data/items/'

export default function Categories({ categories }) {
  function buildCategories(categories) {
    let elems = []
    for (const el in categories) {
      elems.push(
        <div key={el} className='flex justify-center my-2 w-full'>
          <Link href={categories[el]}>
            <button className='w-full inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg'>
              {el}
            </button>
          </Link>
        </div>
      )
    }
    return elems
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Categories - FictionShop</title>
          <meta name='description' content='Available Item-Categories in the FictionShop'></meta>
        </Head>

        <section className='text-gray-300'>
          <div className='container mx-auto flex px-3 py-24 flex-col items-center'>
            <div className='lg:flex-grow flex flex-col mb-16 items-center text-center'>
              <h1 className='sm:text-4xl text-3xl mb-4 text-gray-100'>Categories</h1>
              <p className='mb-8 leading-relaxed'>
                These are the available Item-Categories in the Shop:
              </p>
              <div className='flex justify-center my-2 w-full'>
                <Link href='/catalog'>
                  <button className='w-full inline-flex text-white bg-sky-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg'>
                    All Items
                  </button>
                </Link>
              </div>
              {buildCategories(categories)}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  let categories = {}
  const data = shopItems
  for (const article of data) {
    categories[article.category] = '/catalog/' + article.category.toLowerCase()
  }

  return { props: { categories } }
}
