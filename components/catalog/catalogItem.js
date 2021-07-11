import Image from 'next/image'
import Link from 'next/link'

export default function CatalogItem(props) {
  return (
    <Link href={'/catalog/article/' + props.item.keyword}>
      <div
        className='xl:w-1/4 lg:w-1/3 sm:w-1/2 p-1 w-full mx-auto'
        style={{ cursor: 'pointer' }}
      >
        <div className='bg-gray-700 text-gray-100 w-full rounded-lg p-0 hover:text-gray-800 hover:bg-gray-200'>
          <a className='block relative h-48 rounded overflow-hidden'>
            <Image
              className='object-cover object-center w-full h-full block'
              src={props.item.image}
              layout='fill'
            />
          </a>
          <div className='p-3'>
            <h3 className='text-gray-400 text-xs tracking-widest title-font mb-1'>
              {props.item.category.toUpperCase()}
            </h3>
            <h2 className='title-font text-lg font-medium'>
              {props.item.name}
            </h2>
            <p className='mt-1 text-sky-500 font-bold'>${props.item.price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
