import Link from 'next/link'

export default function Header() {
  return (
    <header className='text-gray-100 body-font bg-gray-800'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex title-font font-bold ml-3 text-xl items-center text-sky-500 mb-4 md:mb-0'>
            FictionShop
          </a>
        </Link>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <Link href='/catalog'>
            <a className='mr-5 hover:text-sky-400'>All Items</a>
          </Link>
          <Link href='/catalog/vehicles'>
            <a className='mr-5 hover:text-sky-400'>Vehicles</a>
          </Link>
          <Link href='/catalog/premium'>
            <a className='mr-5 hover:text-sky-400'>Premium</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
