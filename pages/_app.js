 
import '../styles/custom.css';
import Layout from '../components/layout/main.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
