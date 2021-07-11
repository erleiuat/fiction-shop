import Image from 'next/image'
import Link from 'next/link'

export default function CatalogItem(props) {
  return (
    <Link href={'/catalog/article/' + props.item.keyword}>
      <div
        className='xl:w-1/4 lg:w-1/3 md:w-1/2 p-4 w-full'
        style={{ cursor: 'pointer' }}
      >
        <a className='block relative h-48 rounded overflow-hidden'>
          <Image
            className='object-cover object-center w-full h-full block'
            src={props.item.image}
            width={420}
            height={260}
          />
        </a>
        <div className='mt-4'>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
            {props.item.category.toUpperCase()}
          </h3>
          <h2 className='text-gray-900 title-font text-lg font-medium'>
            {props.item.name}
          </h2>
          <p className='mt-1'>${props.item.price}</p>
        </div>
      </div>
    </Link>
  )
}
