/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (

    <div className="row">
      <div className="col-sm-12 col-md-3">
      <a href="/profile/" >
      <StaticImage
        layout="constrained"
        src="../images/profile-pic.png"
        style={{maxWidth:150}}
        quality={95}
        alt="Profile picture"
      />
      </a>
      </div>
      <div className="col-sm-12 col-md-9">
      {author?.name && (
        <p>
          <strong style={{fontSize:"120%"}}>{author.name}</strong><br />
          <p style={{fontSize:"90%", whiteSpace: "pre-wrap"}}>{author?.summary}</p>
          <button onClick={() => window.open(`https://github.com/${social?.github}/`, '_blank', 'noreferrer')} style={{ border:"none", outline:"none", background:"transparent", paddingRight:"0.2em"}}>
            <i className="fa fa-github fa-2x" style={{color: "lightgrey"}} aria-hidden="true"></i>
          </button>
          <button onClick={() => window.open(`https://twitter.com/${social?.twitter}/`, '_blank', 'noreferrer')} style={{ border:"none", outline:"none", background:"transparent", paddingRight:"0.2em"}}>
            <i className="fa fa-twitter fa-2x" style={{color: "lightgrey"}} aria-hidden="true"></i>
          </button>
        </p>
      )}
      </div>
    </div>
  )
}

export default Bio
