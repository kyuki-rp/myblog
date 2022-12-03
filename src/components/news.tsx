import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";

import PostCard from "../components/postcard"


function News() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          limit: 5
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { date: { ne: null } }}
        ) {
          nodes {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY年MM月DD日")
              title
              description
              category
              tags
            }
          }
        }
      }
    `
  )

  const posts = data.allMarkdownRemark.nodes

  return (  
    <>
      {posts.map(post => {
        return (
          <div className="btn btn-light" style={{padding:"10px 0 10px 0", margin:"5px", width:"100%", textAlign:"left"}}>
            <PostCard post={post}/>
          </div>
        )
      })}
    </>
  );
}

export default News