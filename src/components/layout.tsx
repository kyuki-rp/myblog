import * as React from "react"

import Header from '../components/header'
import Footer from '../components/footer'
import FixedMenu from '../components/fixedmenu'


const Layout = ({ location, title, children }) => {
  const isRootPath = location.pathname === '/'

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main style={{margin:"70px 0 240px 0", padding:'20px'}}>{children}</main>
      <Footer />
      <FixedMenu />
    </div>
  )
}

export default Layout
