 
import '../styles/custom.css';
import Layout from '../components/layout/main.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function reportWebVitals(metric) {
  console.log(metric)
}
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
