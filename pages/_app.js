import '../styles/globals.css'
import Layout from '../components/layout/main';
function MyApp({ Component, pageProps }) {
  return (
    <>
  <Layout>
   <Component {...pageProps} />
   </Layout>
    <ToastContainer />
    </>)
  }
  

export default MyApp
