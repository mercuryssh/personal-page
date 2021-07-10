import Layout from '../components/structure/layout'
import '../styles/globals.sass';

function MyApp({Component, pageProps}) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>)
}


export default MyApp
