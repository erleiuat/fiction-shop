import Header from 'components/header'

export default function Layout(props) {
  return (
    <div className='flex subpixel-antialiased flex-col justify-center min-h-screen'>
      <Header></Header>
      <main className='flex flex-col justify-center w-full flex-1 px-20'>
        {props.children}
      </main>
      <footer className='flex items-center justify-center w-full h-12 border-t'>
        FictionShop
      </footer>
    </div>
  )
}
