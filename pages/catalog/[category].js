import ItemList from 'components/catalog/itemList'

export default function Category({ articles }) {
  return <ItemList articles={articles} />
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://scumfiction.com/shop_data/items.json`)
  const data = await res.json()
  const articles = data.filter(article => {
    if (article.category.toLowerCase() == params.category.toLowerCase())
      return true
  })
  return { props: { articles } }
}

export async function getStaticPaths() {
  const res = await fetch(`https://scumfiction.com/shop_data/items.json`)
  const articles = await res.json()
  const paths = articles.map(article => ({
    params: { category: article.category.toLowerCase() }
  }))

  return { paths, fallback: false }
}
