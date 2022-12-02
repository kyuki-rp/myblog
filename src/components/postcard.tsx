import * as React from "react"
import { Link, graphql } from "gatsby"


const PostCard = ({ post }) => {
    const title = post.frontmatter.title || post.fields.slug
    const slug = post.frontmatter.slug || post.fields.slug
    
    return (
      <div style={{display:"flex", position:"relative", top:"0", left:"0", width:"100%", height:"100%"}}>
        <Link to={post.fields.slug} itemProp="url" style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}} />
        <article className="post-list-item" itemScope itemType="http://schema.org/Article" style={{margin:"0 10px"}}>
          <h4>{title}</h4>
          <p style={{color: "grey", fontSize:"0.8rem" }}>{post.frontmatter.date}</p>
          <p
              dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
          />
        </article>
      </div>    

    )
}

export default PostCard