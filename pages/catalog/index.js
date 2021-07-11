import fs from 'fs'
import ItemList from 'components/catalog/itemList'

export default function Category({ articles }) {
  return <ItemList articles={articles} />
}

export async function getStaticProps({ params }) {
  const articles = JSON.parse(fs.readFileSync('public/articleList.json'))
  return { props: { articles } }
}
