import ItemList from 'components/catalog/itemList'
import Layout from 'components/layout'
import Head from 'next/head'

export default function Category({ articles }) {
  return (
    <Layout>
      <Head>
        <title>All Items - FictionShop</title>
        <meta
          name='description'
          content='All available items in the FictionShop'
        ></meta>
      </Head>
      <ItemList articles={articles} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://scumfiction.com/shop_data/items.json`)
  const articles = await res.json()
  return { props: { articles } }
}
