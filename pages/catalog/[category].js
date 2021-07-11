import fs from 'fs'
import ItemList from 'components/catalog/itemList'

export default function Category({ articles }) {
  return <ItemList articles={articles} />
}

export async function getStaticProps({ params }) {
  const articles = JSON.parse(
    fs.readFileSync('public/articleList.json')
  ).filter(article => {
    if (article.category.toLowerCase() == params.category.toLowerCase())
      return true
  })
  return { props: { articles } }
}

export async function getStaticPaths() {
  const articles = JSON.parse(fs.readFileSync('public/articleList.json'))
  const paths = articles.map(article => ({
    params: { category: article.category.toLowerCase() }
  }))

  return { paths, fallback: false }
}
