import ItemList from 'components/catalog/itemList'

export default function Category({ articles }) {
  return <ItemList articles={articles} />
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://scumfiction.com/shop_data/items.json`)
  const articles = await res.json()
  return { props: { articles } }
}
