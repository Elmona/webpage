
export const makeTree = data => {
  const base = { children: [] }

  for (const node of data) {
    const path = node.slug.match(/\/[^\/]+/g)
    let curr = base

    path.forEach((e, i) => {
      const currPath = path.slice(0, i + 1).join('')
      const child = curr.children.find(e => e.slug === currPath)

      if (child) {
        curr = child
      } else {
        curr.children.push({
          slug: currPath,
          children: [],
          ...node
        })
        curr = curr.children[curr.children.length - 1]
      }
    })
  }

  return base.children
}