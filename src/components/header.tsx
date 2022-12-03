import * as React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useState, useEffect} from 'react';


const Header = () => {

  const [navbar, setNavbar] = useState(-100)

  useEffect(() => {
    let scrollPrev = 0;
    
    const scrollNav = () => {
      if (window.scrollY < 20) {
        setNavbar(0);
      } else if(scrollPrev - window.scrollY > 0) {
        setNavbar(0);
      }else{
        setNavbar(-100);
      }
      scrollPrev = window.scrollY;
    };
    scrollNav()
    window.addEventListener("scroll", scrollNav)

    return () => {
      window.removeEventListener('scroll', scrollNav);
    };

  }, [])

  return (
    <>
    <div id="top"></div>
    <div className="fixed-top" style={{transform:`translateY(${navbar}%)`}}>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" style={{fontWeight:"bold", opacity:"0.87"}}>
          <Nav className="mx-5" >
              <Nav.Link href="/" style={{color:"midnightblue"}}>middenii</Nav.Link>
          </Nav>
          <Navbar.Toggle className="mx-3" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="mx-5" id="responsive-navbar-nav">
            <Nav className='ms-auto'>
              <Nav.Link href="/">Abouts</Nav.Link>
              <Nav.Link href="/works">Works</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
    </>
  )
}

export default Header

