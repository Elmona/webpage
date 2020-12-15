

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageComponent = path.resolve('./src/templates/page.js')
    resolve(
      graphql(`
      {
        allContentfulWebpage {
          totalCount
          nodes {
            name
            slug
          }
        }
      }
      `).then(res => {
        if (res.errors) {
          console.log(res.errors)
          reject(res.errors)
        }
        console.log(res)
        const pages = result.data.allContentfulWebpage.nodes
        for (const page of pages) {
          createPage({
            path: `${page.slug}`,
            component: pageComponent,
            context: {
              slug: page.slug,
              name: page.name
            }
          })

        }
      })
    )


  })
}