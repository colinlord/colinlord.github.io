import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <h1>{data.wordpressPost.title}</h1>
    <p>
      Originally published: {data.wordpressPost.date}<br />
      Last updated: {data.wordpressPost.modified}
    </p>
    <p>
      Featured Image:
      <img
        src={data.wordpressPost.jetpack_featured_media_url}
        alt="featured"
        class="featured"
      />
    </p>
    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
  </Layout>
)
export default BlogPostTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      jetpack_featured_media_url
      date(formatString: "MMMM DD, YYYY")
      modified(formatString: "MMMM DD, YYYY")
    }
  }
`
