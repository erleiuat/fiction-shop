import Link from 'next/link'

export default function Header({ articles }) {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex title-font font-bold ml-3 text-xl items-center text-blue-400 mb-4 md:mb-0'>
            FictionShop
          </a>
        </Link>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <Link href='/catalog'>
            <a className='mr-5 hover:text-gray-900'>All Items</a>
          </Link>
          <Link href='/catalog/vehicles'>
            <a className='mr-5 hover:text-gray-900'>Vehicles</a>
          </Link>
          <Link href='/catalog/premium'>
            <a className='mr-5 hover:text-gray-900'>Premium</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
