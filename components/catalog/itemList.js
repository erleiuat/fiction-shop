import Layout from 'components/layout'
import CatalogItem from 'components/catalog/catalogItem'

export default function ItemList({ articles }) {
  function buildList() {
    let items = []
    for (const article of articles) {
      items.push(<CatalogItem key={article.keyword} item={article} />)
    }
    return items
  }

  return (
    <Layout>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>{buildList()}</div>
        </div>
      </section>
    </Layout>
  )
}
