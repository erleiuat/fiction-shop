import ItemList from 'components/catalog/itemList'
import Head from 'next/head'

export default function Category({ articles, params }) {
  return (
    <>
      <Head>
        <title>{params.category} Category - FictionShop</title>
        <meta
          name='description'
          content={'The ' + params.category + ' Category from FictionShop!'}
        ></meta>
      </Head>
      <ItemList articles={articles} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://scumfiction.com/shop_data/items.json`)
  const data = await res.json()
  const articles = data.filter(article => {
    if (article.category.toLowerCase() == params.category.toLowerCase()) {
      params.category = article.category
      return true
    }
  })
  return { props: { articles, params } }
}

export async function getStaticPaths() {
  const res = await fetch(`https://scumfiction.com/shop_data/items.json`)
  const articles = await res.json()
  const paths = articles.map(article => ({
    params: { category: article.category.toLowerCase() }
  }))

  return { paths, fallback: false }
}
