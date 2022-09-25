import React,{Fragment} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 const Layout = (props) => {
  return <Fragment>
    <Header/>
    <Main/>
    {/* <div>{props.children}</div>
    <Footer/> */}

  </Fragment>
}
export default Layout
