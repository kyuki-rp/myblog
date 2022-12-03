import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import News from "../components/news"
import { StaticImage } from "gatsby-plugin-image"

import 'font-awesome/css/font-awesome.min.css';


const Works = ({ data, location }) => {
  const siteTitle = "Works"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <h1 id="title">{siteTitle}</h1>
      <StaticImage src="../images/works-pic.jpg" alt="works-pic" />

      <div style={{paddingTop:"3rem"}}/>
      <h2 style={{display:"inline"}}>本サイト</h2>
      <button onClick={() => window.open('https://github.com/kyuki-rp/myblog/', '_blank', 'noreferrer')} style={{ border:"none", outline:"none", background:"transparent", paddingRight:"0.2em"}}>
        <i className="fa fa-github fa-2x" style={{color: "dimgray"}} aria-hidden="true"></i>
      </button>
      
      <div style={{paddingTop:"1rem"}}/>
      <h2 style={{display:"inline"}}>Firebase</h2>
      <button onClick={() => window.open('https://github.com/kyuki-rp/myapp/', '_blank', 'noreferrer')} style={{ border:"none", outline:"none", background:"transparent", paddingRight:"0.2em"}}>
        <i className="fa fa-github fa-2x" style={{color: "dimgray"}} aria-hidden="true"></i>
      </button>
      <PortfolioLink name="MyAccount" url="https://myapp.middenii.com/account/" />
      <PortfolioLink name="ToDo" url="https://myapp.middenii.com/todo/" />

      <div style={{paddingTop:"1rem"}}/>
      <h2 style={{display:"inline"}}>Ellie</h2>
      <button onClick={() => window.open('https://github.com/kyuki-rp/ellie/', '_blank', 'noreferrer')} style={{ border:"none", outline:"none", background:"transparent", paddingRight:"0.2em"}}>
        <i className="fa fa-github fa-2x" style={{color: "dimgray"}} aria-hidden="true"></i>
      </button>
      {/* <PortfolioLink name="Hello World" url="https://ellie-app.com/gXmD6hLQtzMa1/" /> */}
      {/* <PortfolioLink name="Web Format" url="https://ellie-app.com/h4dsvHr6z6Qa1/" /> */}
      <PortfolioLink name="Calculator" url="https://ellie-app.com/gXmGdqN9PLCa1/" />
      <PortfolioLink name="Safari Game" url="https://ellie-app.com/gXLJZN2jzRga1/" />
      <PortfolioLink name="Space Game" url="https://ellie-app.com/gXmXQzqTkt4a1/" />

      
      <h2 style={{paddingTop:"3em"}}>最新記事</h2>
      <News />

    </Layout>
  )
}

const PortfolioLink = ({ name, url }) => {
  return (
    <>
      <div style={{textAlign:"center", margin:"5px"}}>
      <button onClick={() => {window.open(url, '_blank', 'noreferrer');}}
              className="btn btn-light"
              style={{width:"100%"}}>{name}</button>
      </div>
    </>
  )
}

export default Works