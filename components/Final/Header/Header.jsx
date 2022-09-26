import React from 'react'
import styles from './header.module.css'
import Link from 'next/Link';
import {FaBars} from 'react-icons/fa'
import { BsPercent} from 'react-icons/bs'
import { BiSearch} from 'react-icons/bi'
import { AiOutlineHeart} from 'react-icons/ai'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { FaRegUser} from 'react-icons/fa'


 const Header = () => {
  return (
    <div className= {styles.header_container}>
           <div className= {styles.site_container}>
            <div className= {styles.header_content}>
              <div className={styles.header_top}>
                <nav className= {styles.nav_left}>
                    <ul>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>My Contact</a></li>
                        <li><a href='#'>Featured app</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </nav>

                <nav className= {styles.nav_right}>
                  <ul>
                        <li><a href='#'>Order Tracing</a></li>
                        <li><a href='#'>English<i class="ri-arrow-down-s-line"></i></a>
                        
                        <ul class="dropdown">
                          <li><a href="#">English</a></li>
                          <li><a href="#">Bengali</a></li>
                        </ul>
                        </li>
                        <li><a href='#'>USD<i class="ri-arrow-down-s-line"></i></a>
                        
                        <ul class="dropdown">
                          <li><a href="#">Taka</a></li>
                          <li><a href="#">Euro</a></li>
                        </ul>
                        </li>
                    </ul>

                </nav>
              </div>
              <div className={styles.header_mid}>
                  <div className={styles.header_logo}>
                    <a href='#'><h2>Walcart</h2></a>

                  </div>
                  <div className={styles.hero_search_for}>
                            <form action="#">
                             <span className={styles.search_ic}><BiSearch/></span>   <input type="text" placeholder="What do you want to order?"/>
                                <button type="submit" className={styles.site_btn}>Search</button>
                            </form>
                        </div>
                  <div className={styles.user_info}>
                    <span className={styles.user_icon}><FaRegUser/></span>
                    <div  className={styles.user_text}>
                      <small>Sign In</small>
                      <h5 >Account</h5>
                  </div> 
                  </div>
                  <div className={styles.header_cart}>

                        <ul>
                            <li><a href="#"><AiOutlineHeart/> <span>1</span></a></li>
                            <li><a href="#"><AiOutlineShoppingCart/> <span>3</span></a></li>
                        </ul>
                  </div>
              </div>
              <div className={styles.top_category_menus}>
              <div className={styles.top_categories_wrap}>
                <div className={styles.top_categories}>
                   <FaBars className={styles.icon_bar} />  Top Categories
                </div>
            </div>
            <div className={styles.top_menu_wrap}>

            <nav className= {styles.top_menu}>
                    <ul>
                        <li><a href='#'>Exclusive  Deals <i class="ri-arrow-down-s-line"></i></a>
                        <ul class="dropdown">
                          <li><a href="#">Flash deals</a></li>
                          <li><a href="#">Exclusive  Deals</a></li>
                        </ul>
                        </li>
                        <li><a href='#'>Smart Watches <i class="ri-arrow-down-s-line"></i></a>
                        <ul class="dropdown">
                          <li><a href="#">Apple</a></li>
                          <li><a href="#">Xiaomi</a></li>
                        </ul>
                        </li>
                        <li><a href='#'>Cell Phone</a></li>
                        <li><a href='#'>Headphone</a></li>
                    </ul>
                </nav>
                
            </div>
            <div className={styles.offers_area}>
              <span className={styles.circle_percent}><BsPercent/></span>
                <div  className={styles.offer_text}>
                    <small>Only this weekend</small>
                    <h5 >Super Discount</h5>
                </div> 
             </div>

            
        </div>


            </div>

           </div>
    </div>
 
  )
}
export default Header
