import Link from 'next/link'

export default function Header() {
  return (
    <header className='text-gray-400 bg-gray-800 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex title-font font-bold items-center text-sky-500 mb-4 md:mb-0'>
            <span className='ml-3 text-xl'>FictionShop</span>
          </a>
        </Link>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          <Link href='/catalog'>
            <a className='mr-5 hover:text-sky-400'>All Items</a>
          </Link>
          <Link href='/catalog/premium'>
            <a className='mr-5 hover:text-sky-400'>Premium</a>
          </Link>
          <Link href='/catalog/vehicles'>
            <a className='mr-5 hover:text-sky-400'>Vehicles</a>
          </Link>
          <Link href='/catalog/pharmacy'>
            <a className='mr-5 hover:text-sky-400'>Pharmacy</a>
          </Link>
          <Link href='/catalog/kits'>
            <a className='mr-5 hover:text-sky-400'>Kits</a>
          </Link>
        </nav>
        <Link href='/how_to_buy'>
          <a className='mr-5 hover:text-sky-400'>How & Where to buy?</a>
        </Link>
      </div>
    </header>
  )
}
