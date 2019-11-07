import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressWpRaces.edges.map(post => (
        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
          <Link
            to={`/race-report/${post.node.slug}`}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
            <div style={{ width: "75%" }}>
              <h3
                dangerouslySetInnerHTML={{ __html: post.node.title }}
                style={{ marginBottom: 0 }}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)
export default IndexPage

export const query = graphql`
  query {
    allWordpressWpRaces {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
