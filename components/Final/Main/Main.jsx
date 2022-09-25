import React, { Component } from 'react'
import styles from './main.module.css'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'remixicon/fonts/remixicon.css'
import { BiFridge } from 'react-icons/bi'
import { CgMoreO } from 'react-icons/cg'
import { MdOutlineFastfood} from 'react-icons/md'
import { HiOutlineHome} from 'react-icons/hi'
import { FiBook} from 'react-icons/fi'
import { MdOutlineLiving} from 'react-icons/md'
import { BsLaptop} from 'react-icons/bs'
import { IoIosArrowForward} from 'react-icons/io'

const categories =[
    {
      id:1,
      cat_title:'Portfolio react website',
    },
    {
        id:2,
        cat_title:'Portfolio react website',
    },
    {
        id:3,
        cat_title:'Portfolio react website',
    },
    {
        id:4,
        cat_title:'Portfolio react website',
    },
    {
        id:5,
        cat_title:'Portfolio react website',
    },
    {
        id:6,
        cat_title:'Portfolio react website',
    }
    
  ]

const Main = () => {
  return (

    <section className={styles.site_container}>


   

        <div className={`${styles.main_wrapper}`}>
            <aside className={styles.aside}>
                <div className={styles.category_wrapper}>

                <nav className= {styles.hero_categories}>
                    <ul>
                        <li><a href='#' className={styles.arrow}><BsLaptop className={styles.icon_custom}/> Laptop and Desktop</a>
                        <ul  className= {styles.menus}>
                            <li className= {styles.has_submenu}><a class='prett' href='Dropdown 1' title='Dropdown 1'>Dropdown 1</a>
                            <ul className={styles.submenu}>
                                <li><a href="#" title="Sub Menu">Sub Menu1</a></li>
                                <li><a href="#" title="Sub Menu">Sub Menu 2</a></li>
                                <li><a href="#" title="Sub Menu">Sub Menu 3</a></li>
                            </ul>
                            </li>
                            <li><a href='#' title='Dropdown 2'>Dropdown 2</a></li>
                            <li><a href='#' title='Dropdown 3'>Dropdown 3</a></li>
                        </ul>
                        
                        </li>
                        <li><a href='#'> <MdOutlineLiving className={styles.icon_custom}/>Home Living</a></li>
                        <li><a href='#'> <FiBook className={styles.icon_custom}/> Book and Stationary</a></li>
                        <li><a href='#'><HiOutlineHome className={styles.icon_custom}/>Home Appliances</a></li>
                        <li><a href='#' className={styles.arrow}><FiBook className={styles.icon_custom}/> Book and Stationary</a>
                        <ul  className= {styles.menus}>
                            <li className= {styles.has_submenu}><a class='prett' href='Dropdown 1' title='Dropdown 1'>Dropdown 1</a>
                            <ul className={styles.submenu}>
                                <li><a href="#" title="Sub Menu">Sub Menu1</a></li>
                                <li><a href="#" title="Sub Menu">Sub Menu 2</a></li>
                                <li><a href="#" title="Sub Menu">Sub Menu 3</a></li>
                            </ul>
                            </li>
                            <li><a href='#' title='Dropdown 2'>Dropdown 2</a></li>
                            <li><a href='#' title='Dropdown 3'>Dropdown 3</a></li>
                        </ul>
                        </li>
                        <li><a href='#'> <BiFridge className={styles.icon_custom}/> Electronics Appliances</a></li>
                        <li><a href='#'><MdOutlineFastfood className={styles.icon_custom}/> Fast Food and Snacks</a></li>
                        <li><a href='#' className={styles.arrow}><CgMoreO className={styles.icon_custom}/> More Categories</a></li>
                     
                    </ul>
                </nav>
                </div>
                
            </aside> 
            <div className={styles.slider_wrapper}>

                <div className={styles.slider_inner}>
                    <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showThumbs={false}>
                        <div>
                            <Image src="/images/image1.png" alt='Image1' width="595" height="346"></Image>
        
                        </div>
                        <div>
                             <Image src="/images/image2.png" alt='Image2' width="595" height="346"></Image>
        
                        </div>
                        <div>
                             <Image src="/images/image1.png" alt='Image1' width="595" height="346"></Image>
        
                        </div>
                
                    </Carousel>

                    </div>

                    <div className={styles.offer_img_gallery}>
                        <div className={styles.offer_images}>
                            <div className={styles.offer_img}>
                                <Image src="/images/image4.png" alt='Image1' width="277" height="159"></Image>

                            </div>
                            <div className={styles.offer_img}>
                                 <Image src="/images/image5.png" alt='Image1' width="277" height="159"></Image>

                            </div>
                        </div>
                    </div>
            </div>
        </div>

        {/* <div className=  {`${styles.product_category_container}, ${styles.site_container}`}> */}
        <div className=  {styles.product_category_container}>
        <div className={styles.product_category_title}> <h2>Popular Product Categories</h2></div>
            <div className={styles.product_category_content}>
                {/* {

                    data.map(({id, title})=>{
                        return(
                            <div  key={id}className={styles.category_box}>
                                    <Image src="/images/multipledevices.png" alt='multiple-devices' width="20" height="20"></Image>
                                    <h3 className= {styles.cat_title}>{cat_title}</h3>
                                
                            </div>

                        
                        )
                    })
                } */}



                <div className={styles.category_box}>
                        <Image src="/images/multipledevices.png" alt='multiple-devices' width="20" height="20"></Image>
                        <h3 className= {styles.cat_title}>Electronics Appliances</h3>
                    
                </div>
                <div className={styles.category_box}>
                    <div className={styles.img_wrap}>
                    <Image src="/images/dress 1.png" alt='multiple-devices' width="20" height="20"></Image>
                    </div>
                      
                        <h4 className= {styles.cat_title}>Electronics Appliances</h4>
               
                </div>
                <div className={styles.category_box}>
                        <Image src="/images/profile 2.png" alt='multiple-devices' width="20" height="20"></Image>
                        <h4 className= {styles.cat_title}>Electronics Appliances</h4>
                </div>
                <div className={styles.category_box}>
                        <Image src="/images/electric.png" alt='multiple-devices' width="20" height="20"></Image>
                    <h4 className= {styles.cat_title}>Electronics Appliances</h4>
                </div>
             </div>
             <div className={styles.product_category_content}>

                <div className={styles.category_box}>
                        <Image src="/images/profile 2.png" alt='profile 2' width="20" height="20"></Image>
                        <h3 className= {styles.cat_title}>Electronics Appliances</h3>
                    
                </div>
                <div className={styles.category_box}>
                    <div className={styles.img_wrap}>
                    <Image src="/images/shopping-basket1.png" alt='shopping-basket1' width="20" height="20"></Image>
                    </div>
                    
                        <h4 className= {styles.cat_title}>Electronics Appliances</h4>

                </div>
                <div className={styles.category_box}>
                        <Image src="/images/laptop1.png" alt='laptop1' width="20" height="20"></Image>
                        <h4 className= {styles.cat_title}>Electronics Appliances</h4>
                </div>
                <div className={styles.category_box}>
                        <Image src="/images/fast-food.png" alt='fast-food' width="20" height="20"></Image>
                    <h4 className= {styles.cat_title}>Electronics Appliances</h4>
                </div>
                </div>
        </div>

    </section>

    
    // <div>Main</div>
  )
}
export  default Main
