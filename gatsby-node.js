/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")
  const RaceReportTemplate = path.resolve("./src/templates/RaceReport.js")

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpRaces {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const BlogPosts = result.data.allWordpressPost.edges
    BlogPosts.forEach(post => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })

      const Pages = result.data.allWordpressPage.edges
      Pages.forEach(page => {
        createPage({
          path: `/${page.node.slug}`,
          component: PageTemplate,
          context: {
            id: page.node.wordpress_id,
          },
        })
      })
    })

    const RaceReports = result.data.allWordpressWpRaces.edges
    RaceReports.forEach(post => {
      createPage({
        path: `/race-report/${post.node.slug}`,
        component: RaceReportTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })
    })
  })
}
