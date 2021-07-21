import ItemList from 'components/catalog/itemList'
import Layout from 'components/layout'
import Head from 'next/head'
import shopItems from 'public/shop_data/items.json'

export default function Category({ articles }) {
  return (
    <Layout>
      <Head>
        <title>All Items - FictionShop</title>
        <meta name='description' content='All available items in the FictionShop'></meta>
      </Head>
      <ItemList articles={articles} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = shopItems
  const articles = data
  return { props: { articles } }
}
