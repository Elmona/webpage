const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageComponent = path.resolve('./src/index.js')
    resolve(
      graphql(`
      {
        allContentfulWebpage {
          nodes {
            name
            slug
          }
        }
        allContentfulLayout(limit: 1) {
          nodes {
            sitename
            logotype {
              title
              description
              file {
                url
              }
            }
          }
        }
      }
      `).then(res => {
        if (res.errors) {
          console.log(res.errors)
          reject(res.errors)
        }
        const pages = res.data.allContentfulWebpage.nodes
        const layout = res.data.allContentfulLayout.nodes[0]

        pages.forEach(page => {
          let slug = page.slug
          console.log(slug)
          if (page.slug === 'index') {
            slug = '/'
          }

          createPage({
            path: slug,
            component: pageComponent,
            context: {
              layout: layout,
              slug: page.slug,
              name: page.name
            }
          })
        })
      })
    )
  })
}