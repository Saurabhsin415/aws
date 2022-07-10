import '../styles/index.css';
import '../styles/custom.css';
import Layout from '../components/layout/main.js';
 
function MyApp({ Component, pageProps }) {
  return (
    <>
  <Layout>
   <Component {...pageProps} />
   </Layout>
    {/* <ToastContainer /> */}
    </>)
  }
  

export default MyApp
