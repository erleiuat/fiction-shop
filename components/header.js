import Link from 'next/link'

export default function Header() {
  return (
    <header className='text-gray-400 bg-gray-800 body-font sticky top-0 z-40'>
      <div className='container mx-auto flex flex-wrap md:p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex title-font font-bold items-center text-sky-500 mt-3 md:mt-0'>
            <span className='text-xl'>FictionShop</span>
          </a>
        </Link>
        <div className='w-full border-t border-gray-300 my-3 md:hidden'></div>
        <nav className='md:ml-auto md:mr-auto md:hidden flex flex-wrap items-center text-base justify-center'>
          <Link href='/catalog'>
            <a className='mx-3 hover:text-sky-400'>All Items</a>
          </Link>
          <Link href='/catalog/premium'>
            <a className='mx-3 hover:text-sky-400'>Premium</a>
          </Link>
          <Link href='/catalog/categories'>
            <a className='mx-3 hover:text-sky-400'>Categories</a>
          </Link>
        </nav>
        <nav className='md:ml-auto md:mr-auto hidden md:flex md:flex-wrap items-center text-base justify-center'>
          <Link href='/catalog'>
            <a className='mx-3 hover:text-sky-400'>All Items</a>
          </Link>
          <Link href='/catalog/premium'>
            <a className='mx-3 hover:text-sky-400'>Premium</a>
          </Link>
          <Link href='/catalog/vehicles'>
            <a className='mx-3 hover:text-sky-400'>Vehicles</a>
          </Link>
          <Link href='/catalog/pharmacy'>
            <a className='mx-3 hover:text-sky-400'>Pharmacy</a>
          </Link>
          <Link href='/catalog/categories'>
            <a className='mx-3 hover:text-sky-400'>All Categories</a>
          </Link>
        </nav>
        <div className='w-full border-t border-gray-300 my-3 md:hidden'></div>
        <Link href='/how_to_buy'>
          <a className='hover:text-sky-400 mb-2 md:mb-0'>How & Where to buy?</a>
        </Link>
      </div>
    </header>
  )
}
