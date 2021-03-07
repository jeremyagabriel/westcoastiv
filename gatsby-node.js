const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulPageContainer(filter: {metaTags: {eq: "service"}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  result.data.allContentfulPageContainer.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/service.jsx`),
      context: {
        handle: node.slug,
      },
    });
  });
};