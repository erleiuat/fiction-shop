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
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto md:py-10 p-2'>
        <div className='flex flex-wrap'>{buildList()}</div>
      </div>
    </section>
  )
}
