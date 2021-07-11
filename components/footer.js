export default function Footer() {
  return (
    <footer className='text-gray-200 bg-gray-800 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-200'>
          <span className='ml-3 text-xl'>FictionShop</span>
        </a>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2020 FictionShop
        </p>
      </div>
    </footer>
  )
}
