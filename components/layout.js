import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout(props) {
  return (
    <div className='flex bg-gray-900 subpixel-antialiased flex-col justify-center min-h-screen'>
      <Header />
      <main className='flex flex-col justify-center w-full flex-1 md:px-20'>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
