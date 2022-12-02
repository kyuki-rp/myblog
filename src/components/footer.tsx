import * as React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useState, useEffect} from 'react';

const Footer = () => {
  const [navbar, setNavbar] = useState(100)
  useEffect(() => {
    
    const scrollNav = () => {
      const bottomPosition = document.body.offsetHeight - (window.scrollY + window.innerHeight);
      if (bottomPosition < 10) {
        setNavbar(0);
      }else{
        setNavbar(100);
      }
    };
    scrollNav()
    window.addEventListener("scroll", scrollNav)

    return () => {
      window.removeEventListener('scroll', scrollNav);
    };

  }, [])

  return (
    <div className="fixed-bottom" style={{transform:`translateY(${navbar}%)`}}>
        <Navbar bg="light" variant="light" className="justify-content-center" style={{fontWeight:"bold", opacity:"0.87", padding:"30px 0 80px 0"}}>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">ホーム</Nav.Link>
              <Nav.Link href="/policy">プライバシーポリシー/免責事項</Nav.Link>
              <Nav.Link href="/contact">お問い合わせ</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
    </div>
  )
}

export default Footer