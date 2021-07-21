import ItemList from 'components/catalog/itemList'
import Layout from 'components/layout'
import Head from 'next/head'
import shopItems from 'public/shop_data/items.json'

export default function Category({ articles, params }) {
  return (
    <Layout>
      <Head>
        <title>{params.category} Category - FictionShop</title>
        <meta
          name='description'
          content={'The ' + params.category + ' Category from FictionShop!'}
        ></meta>
      </Head>
      <ItemList articles={articles} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = shopItems
  const articles = data.filter(article => {
    if (article.category.toLowerCase() == params.category.toLowerCase()) {
      params.category = article.category
      return true
    }
  })
  return { props: { articles, params } }
}

export async function getStaticPaths() {
  const data = shopItems
  const paths = data.map(article => ({
    params: { category: article.category.toLowerCase() }
  }))

  return { paths, fallback: false }
}
