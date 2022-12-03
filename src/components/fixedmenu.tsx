import * as React from "react"
import {useState, useEffect} from 'react';

import 'font-awesome/css/font-awesome.min.css';


const FixedMenu = () => {

  const [navbar, setNavbar] = useState(200)
  //navbarの初期値はfalseにする　//setNavbarでnavbarの値をtrueかfalseにする

  useEffect(() => {
    const scrollNav = () => {
      if (window.scrollY >= 780) {
        setNavbar(0);
      }else{
        setNavbar(200);
      }
    };
    scrollNav()
    window.addEventListener("scroll", scrollNav)

    return () => {
      window.removeEventListener('scroll', scrollNav);
    };

  }, [])

  return (
    <div className="fixed-bottom">
      <a href="#top" style={{position:"fixed", bottom:20, right:20, transform:`translateX(${navbar}%)`}}>
          <i className="fa fa-chevron-circle-up fa-4x" style={{color:"lightgrey", opacity:"0.87"}}/>
      </a>
    </div>
  )
}

export default FixedMenu