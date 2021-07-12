import 'tailwindcss/tailwind.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'styles/nprogress.css'
import 'styles/global.css'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
