import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const RaceReportTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressWpRaces.title} />
    <h1>{data.wordpressWpRaces.title}</h1>
    <h2>{data.wordpressWpRaces.acf.location}</h2>
  </Layout>
)
export default RaceReportTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressWpRaces(wordpress_id: { eq: $id }) {
      title
      date(formatString: "MMMM DD, YYYY")
      acf {
        location
      }
    }
  }
`
