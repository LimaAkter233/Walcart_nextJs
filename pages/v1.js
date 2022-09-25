import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/V1/Layout/Layout';
function V1({ Component, pageProps }) {
  return <Layout>
          <Component {...pageProps} />
  </Layout>
  
  
}

export default V1